const { useState, useEffect, Fragment } = React
const { useNavigate, useParams, Link } = ReactRouterDOM


import { AddNote } from "../cmps/add-note.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { NoteEdit } from "../cmps/note-edit.jsx"
import { Screen } from "../cmps/screen.jsx"
import { NoteFilter } from "../cmps/note-filter.jsx"

import { noteService } from "../services/note.service.js"

export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
    const { noteId } = useParams()
    console.log(noteId)

    useEffect(() => {
        loadNotes()
    }, [filterBy])

    function loadNotes() {
        noteService.query(filterBy)
            .then(notes => {
                setNotes(notes)
            })
    }

    function onDeleteNote(ev, noteId) {
        ev.stopPropagation()
        noteService.remove(noteId)
            .then(console.log)
        setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
    }

    function onTogglePin(ev, noteId) {
        ev.stopPropagation()
        const currNote = notes.find(note => note.id === noteId)
        currNote.isPinned = !currNote.isPinned
        noteService.save(currNote)
        setNotes(prevNotes => ([...prevNotes]))
    }

    function onDuplicateNote(ev, noteId) {
        ev.stopPropagation()
        const currNote = notes.find(note => note.id === noteId)
        const duplicateNote = { ...currNote, id: null }
        noteService.save(duplicateNote)
        setNotes(prevNotes => ([...prevNotes, duplicateNote]))
    }

    const pinnedNotes = notes.filter(note => note.isPinned)

    return <section className="note-index">
        <NoteFilter setFilterBy={setFilterBy} />
        <AddNote notes={notes} setNotes={setNotes} />
        {pinnedNotes.length > 0 && <Fragment>
            <h3>Pinned Notes</h3>
            <NoteList notes={pinnedNotes}
                setNotes={setNotes}
                onDeleteNote={onDeleteNote}
                onTogglePin={onTogglePin}
                onDuplicateNote={onDuplicateNote} />
        <h3>Notes</h3>
        </Fragment>}
        <NoteList notes={notes.filter(note => !note.isPinned)}
            setNotes={setNotes}
            onDeleteNote={onDeleteNote}
            onTogglePin={onTogglePin}
            onDuplicateNote={onDuplicateNote} />
        {noteId && <NoteEdit notes={notes}
            setNotes={setNotes}
            noteId={noteId}
            onDeleteNote={onDeleteNote}
            onTogglePin={onTogglePin}
            onDuplicateNote={onDuplicateNote} />}
        {noteId && <Screen />}
    </section>
}

