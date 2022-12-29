const { useState, useEffect } = React
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

    return <section className="note-index">
        <AddNote setNotes={setNotes} />
        <NoteList notes={notes} setNotes={setNotes} loadNotes={loadNotes}/>
        {noteId && <NoteEdit loadNotes={loadNotes} noteId={noteId} />}
        {noteId && <Screen />}
    </section>

}
