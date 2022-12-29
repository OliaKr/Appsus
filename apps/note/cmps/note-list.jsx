const { useNavigate, useParams, Link } = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx"

import { noteService } from "../services/note.service.js"

export function NoteList({ notes,setNotes }) {
    const navigate = useNavigate()

    function onUpdateNote(noteId) {
        navigate(`/note/${noteId}`)
    }
    function onDeleteNote(ev, noteId) {
        ev.stopPropagation()
        noteService.remove(noteId)
            .then(console.log)
        setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))

    }

    function changeColor(color,noteId) {
        noteService.get(noteId)
        .then(note=>{
            noteService.save(note)
            const currNote = notes.find(note=>note.id===noteId)
            currNote.style.backgroundColor = color
            setNotes(prevNotes=>([...prevNotes]))
        })
    }

    return <section className="note-list">
        {notes.map(note => <NotePreview 
        note={note} 
        onDeleteNote={onDeleteNote}
        onUpdateNote={onUpdateNote}
        changeColor={changeColor}
        key={note.id} />)}
    </section>

}

