const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"

export function NoteEdit({loadNotes,noteId}) {
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
    function onCloseEdit(ev) {
        console.log(ev.relatedTarget)
        if (ev.relatedTarget) return
        if (noteToEdit.info.txt) {
            noteService.save(noteToEdit).then(loadNotes)
        }
        navigate('/note')
    }

    
    if (!noteToEdit) return
    console.log(noteToEdit.info);
    return <section className="note-edit" onBlur={onCloseEdit}>
        <input className="no-border"
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
        <button onClick={onCloseEdit}>Close</button>

    </section>

}

