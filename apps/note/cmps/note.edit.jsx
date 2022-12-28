const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"

export function NoteEdit() {
    const [noteToEdit, setNoteToEdit] = useState(null)
    const { noteId } = useParams()

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
    function onCloseNote(ev) {
        console.log(ev.relatedTarget);
        if(ev.relatedTarget) return
        if (newNote.info.txt) {
            noteService.post(newNote).then(note => {
                // setNotes(prevNotes => [...prevNotes, note])
            })
        }
        setNoteToEdit(null)
    }

    if (!noteToEdit) return
    return <section className="note-edit" onBlur={onCloseNote}>
        <input className="no-border"
            type="text"
            name="title"
            placeholder="Title"
            value={noteToEdit.info.title}
            onChange={handelChange} />
        <textarea className="no-border"
            name="txt"
            placeholder="Take a note..."
            value={noteToEdit ? noteToEdit.info.txt : ''}
            onChange={handelChange} />
        <button onClick={onCloseNote}>Close</button>

    </section>

}

