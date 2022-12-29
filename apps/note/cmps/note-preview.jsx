const { useState, useEffect, useRef } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"
import { ColorPicker } from "./color-picker.jsx"
import { DynamicNote } from "./dynamic-note.jsx"

export function NotePreview({ note, setNotes }) {
    const [isPikerOpen, setIsPikerOpen] = useState(false)
    const navigate = useNavigate()

    function onDeleteNote(ev, noteId) {
        ev.stopPropagation()
        noteService.remove(noteId)
            .then(console.log)
        setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))

    }

    function onUpdateNote(noteId) {
        navigate(`/note/${noteId}`)
        console.log('update')
    }

    function onToggleColorPicker(ev,) {
        ev.stopPropagation()
        setIsPikerOpen(prev => !prev)
    }


    return <section className="note-preview"
    onBlur={onToggleColorPicker}
        // style={{ backgroundColor: { note.style.backgroundColor } }}
        onClick={() => onUpdateNote(note.id)}>
        <DynamicNote type={note.type} info={note.info}
            onChangeInfo={info => onChangeInfo(note.id, info)} />
        <section className={`btns-container ${isPikerOpen ? 'show-btn' : ''}`}>
            <button onClick={(ev) => onDeleteNote(ev, note.id)}><i className="fa-solid fa-trash-can"></i></button>
            <button onClick={onToggleColorPicker}><i className="fa-solid fa-palette"></i></button>
            {isPikerOpen && <ColorPicker />}
        </section>
    </section >
}



