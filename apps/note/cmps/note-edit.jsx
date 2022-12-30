const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { DynamicEdit } from "./dynamic-edit.jsx"
import { OptionBar } from "./option-bar.jsx"

import { noteService } from "../services/note.service.js"

export function NoteEdit({ notes, setNotes, noteId, onDeleteNote, onTogglePin, onDuplicateNote }) {
    const [noteToEdit, setNoteToEdit] = useState(null)
    const navigate = useNavigate()


    useEffect(() => {
        noteService.get(noteId)
            .then(setNoteToEdit)
    }, [])

    function handelChange({ target }) {
        let { value, name: field } = target
        setNoteToEdit(prevNote => {
            value = field === 'url' ? noteService.getEmdeddedUrl(value) : value
            const newInfo = { ...prevNote.info, [field]: value }
            return { ...prevNote, info: newInfo }
        })
    }

    function onCloseEdit(ev) {
        console.log(ev.relatedTarget)
        if (ev.relatedTarget) return
        if (noteToEdit.info.txt || noteToEdit.info.url) {
            console.log('noteToEdit',noteToEdit);
            noteService.save(noteToEdit)
            const currNote = notes.find(note => note.id === noteId)
            currNote.info = { ...noteToEdit.info }
            setNotes(prevNotes => ([...prevNotes]))
        }
        navigate('/note')
    }

    function onChangeColor(ev, color) {
        ev.stopPropagation()
        changeColor(color, noteId)
    }

    function changeColor(color, noteId) {
        const currNote = notes.find(note => note.id === noteId)
        currNote.style.backgroundColor = color
        noteService.save(currNote)
        setNoteToEdit(currNote)
    }

    if (!noteToEdit) return
    console.log(noteToEdit.info)
    return <section className="note-edit"
        style={{ backgroundColor: noteToEdit.style.backgroundColor }}
        onBlur={onCloseEdit}
    >
        <DynamicEdit
            note={noteToEdit}
            handleChange={handelChange} />
        <OptionBar note={noteToEdit}
            onChangeColor={onChangeColor}
            onDeleteNote={onDeleteNote}
            onTogglePin={onTogglePin}
            onDuplicateNote={onDuplicateNote} />
        <button onClick={onCloseEdit}
            className="close-btn">Close</button>
    </section>

}
