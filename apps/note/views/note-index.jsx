const { useState, useEffect, Fragment } = React
// const { useNavigate, useParams, Link } = ReactRouterDOM


import { AddNote } from "../cmps/add-note.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { NoteFilter } from "../cmps/note-filter.jsx"

import { noteService } from "../services/note.service.js"
// import { utilService } from "../../../services/util.service.js"

export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
    // const { noteId } = useParams()

    useEffect(() => {
        loadNotes()
    }, [filterBy])

    function loadNotes() {
        noteService.query(filterBy)
            .then(notes => {
                setNotes(notes)
            })
    }

    function changeColor(color, noteId) {
        const currNote = notes.find(note => note.id === noteId)
        currNote.style.backgroundColor = color
        console.log('currNote', currNote)
        noteService.save(currNote)
        setNotes(prevNotes => ([...prevNotes]))
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
            .then(note => setNotes(prevNotes => ([...prevNotes, note])))
    }

    const pinnedNotes = notes.filter(note => note.isPinned)

    return <main className="note-index">
        <NoteFilter setFilterBy={setFilterBy} />
        <AddNote notes={notes} setNotes={setNotes} />
        {pinnedNotes.length > 0 && <Fragment>
            <h3>Pinned Notes</h3>
            <NoteList notes={pinnedNotes}
                changeColor={changeColor}
                onDeleteNote={onDeleteNote}
                onTogglePin={onTogglePin}
                onDuplicateNote={onDuplicateNote} />
            <h3>Notes</h3>
        </Fragment>}
        <NoteList notes={notes.filter(note => !note.isPinned)}
            changeColor={changeColor}
            onDeleteNote={onDeleteNote}
            onTogglePin={onTogglePin}
            onDuplicateNote={onDuplicateNote} />
    </main>
}


