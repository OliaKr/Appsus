const { useState, useEffect, Fragment } = React
const { useNavigate, useParams, Link } = ReactRouterDOM


import { AddNote } from "../cmps/add-note.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { NoteEdit } from "../cmps/note-edit.jsx"
import { Screen } from "../cmps/screen.jsx"

import { noteService } from "../services/note.service.js"

export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const { noteId } = useParams()
    console.log(noteId)

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query()
            .then(notes => {
                setNotes(notes)
            })
    }

    const pinnedNotes = notes.filter(note => note.isPinned)

    return <section className="note-index">
        <AddNote notes={notes} setNotes={setNotes} />
        {pinnedNotes && <Fragment>
            <h3>Pinned Notes</h3>
            <NoteList notes={pinnedNotes} setNotes={setNotes} />
        </Fragment>}
        <h3>Notes</h3>
        <NoteList notes={notes.filter(note => !note.isPinned)} setNotes={setNotes} />
        {noteId && <NoteEdit notes={notes} setNotes={setNotes} noteId={noteId} />}
        {noteId && <Screen />}
    </section>

}
