const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { DynamicEdit } from "./dynamic-edit.jsx"

import { noteService } from "../services/note.service.js"
import { OptionBar } from "./option-bar.jsx"

export function NoteEdit({ notes, setNotes, noteId }) {
    const [noteToEdit, setNoteToEdit] = useState(null)
    const navigate = useNavigate()


    useEffect(() => {
        noteService.get(noteId)
            .then(setNoteToEdit)
    }, [])

    function handelChange({ target }) {
        let { value, name: field } = target
        setNoteToEdit(prevNote => {
            const newInfo = { ...prevNote.info, [field]: value }
            return { ...prevNote, info: newInfo }
        })
    }

    function handelCheckBoxChange({ target }) {
        let { checked } = target
        console.log('checked',checked);
        const doneAt = checked ? Date.now() : null
        setNoteToEdit(prevNote => {
            const newInfo = { ...prevNote.info, doneAt }
            return { ...prevNote, info: newInfo }
        })
    }

    function onCloseEdit(ev) {
        console.log(ev.relatedTarget)
        if (ev.relatedTarget) return
        if (noteToEdit.info.txt) {
            noteService.save(noteToEdit)
            const currNote = notes.find(note => note.id === noteId)
            currNote.info = { ...noteToEdit.info }
            setNotes(prevNotes => ([...prevNotes]))
        }
        navigate('/note')
    }


    if (!noteToEdit) return
    console.log(noteToEdit.info)
    return <section className="note-edit"
        style={{ backgroundColor: noteToEdit.style.backgroundColor }}
        onBlur={onCloseEdit}
    >
        <DynamicEdit
            note={noteToEdit}
            handleChange={handelChange}
            handelCheckBoxChange={handelCheckBoxChange} />
        <OptionBar />
        <button onClick={onCloseEdit}
            className="close-btn">Close</button>
    </section>

}


{/* <input className="no-border"
    type="text"
    name="title"
    placeholder="Title"
    value={noteToEdit.info.title}
    onChange={handelChange} />
<textarea className="no-border"
    name="txt"
    placeholder="Take a note..."
    value={noteToEdit.info.txt}
    onChange={handelChange} />
<button onClick={onCloseEdit}>Close</button> */}


