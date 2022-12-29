const { useState, useEffect, useRef } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

// import { noteService } from "../services/note.service.js"
import { ColorPicker } from "./color-picker.jsx"
import { DynamicNote } from "./dynamic-note.jsx"

export function NotePreview({ note ,onUpdateNote,onDeleteNote,changeColor}) {
    const [isPikerOpen, setIsPikerOpen] = useState(false)

    function onToggleColorPicker(ev) {
        console.log(ev)
        if (ev.relatedTarget) return
        ev.stopPropagation()
        setIsPikerOpen(prev => !prev)
    }

    function onChangeColor(ev,color){
        ev.stopPropagation()
        changeColor(color,note.id)
    }

    console.log('note.style', note.style)
    return <section className="note-preview"
        onBlur={onToggleColorPicker}
        style={{ backgroundColor: note.style.backgroundColor }}
        onClick={() => onUpdateNote(note.id)}>
        <DynamicNote type={note.type} info={note.info}
            onChangeInfo={info => onChangeInfo(note.id, info)} />

        <section className={`btns-container ${isPikerOpen ? 'show-btn' : ''}`}>

            <button onClick={(ev) => onDeleteNote(ev, note.id)}><i className="fa-regular fa-trash-can"></i></button>
            <button onClick={onToggleColorPicker}><i className="fa-solid fa-palette"></i></button>
            {isPikerOpen && <ColorPicker onChangeColor={onChangeColor} currColor={note.style.backgroundColor} />}
        </section>
    </section >
}



