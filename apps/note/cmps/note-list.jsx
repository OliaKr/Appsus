const { useNavigate, useParams, Link } = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx"

import { noteService } from "../services/note.service.js"

export function NoteList({ notes, setNotes, onDuplicateNote, onTogglePin, onDeleteNote }) {
    const navigate = useNavigate()

    function onUpdateNote(noteId) {
        navigate(`/note/${noteId}`)
    }

    function changeColor(color, noteId) {
        const currNote = notes.find(note => note.id === noteId)
        currNote.style.backgroundColor = color
        noteService.save(currNote)
        setNotes(prevNotes => ([...prevNotes]))
    }

    return <section className="note-list">
        {notes.map(note => <NotePreview
            note={note}
            onDeleteNote={onDeleteNote}
            onUpdateNote={onUpdateNote}
            changeColor={changeColor}
            onTogglePin={onTogglePin}
            onDuplicateNote={onDuplicateNote}
            key={note.id} />)}
    </section>
}



