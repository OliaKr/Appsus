const { useState } = React

import { ColorPicker } from "./color-picker.jsx"

export function OptionBar({ note, onChangeColor, onDeleteNote, onTogglePin, onDuplicateNote }) {
    const [isPikerOpen, setIsPikerOpen] = useState(false)

    function onToggleColorPicker(ev) {
        ev.stopPropagation()
        if (ev.relatedTarget) return
        setIsPikerOpen(prev => !prev)
    }
    return <section className={`btns-container ${isPikerOpen ? 'show-btn' : ''}`}
        onBlur={onToggleColorPicker}>
        <button onClick={(ev) => onTogglePin(ev, note.id)}><i className="fa-solid fa-map-pin"></i></button>
        <button onClick={(ev) => onDuplicateNote(ev, note.id)}><i className="fa-regular fa-clone"></i></button>
        <button onClick={(ev) => onDeleteNote(ev, note.id)}><i className="fa-regular fa-trash-can"></i></button>
        <button onClick={onToggleColorPicker}><i className="fa-solid fa-palette"></i></button>
        {isPikerOpen && <ColorPicker onChangeColor={onChangeColor} currColor={note.style.backgroundColor} />}
    </section>
}