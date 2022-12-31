const { useState } = React

import { DynamicNote } from "./dynamic-note.jsx"
import { OptionBar } from "./option-bar.jsx"

import { noteService } from "../services/note.service.js"

export function NotePreview({ note, onDeleteNote, changeColor, onTogglePin, onDuplicateNote }) {
    const [noteToEdit, setNoteToEdit] = useState(note)

    function onChangeColor(ev, color) {
        ev.stopPropagation()
        changeColor(color, note.id)
        console.log('note.id', note.id)
    }

    function handleChange({ target }) {
        let { value, name: field } = target
        setNoteToEdit(prevNote => {
            const newInfo = { ...prevNote.info, [field]: value }
            noteService.save(prevNote)
            return { ...prevNote, info: newInfo }
        })
    }

    if (!note.style) return
    return <section className="note-preview"
        style={{ backgroundColor: note.style.backgroundColor }}>
        {/* <DynamicNote type={noteToEdit.type} info={noteToEdit.info} handleChange={handleChange} /> */}
        <DynamicNote note={noteToEdit} handleChange={handleChange} />
        <OptionBar
            note={noteToEdit}
            onChangeColor={onChangeColor}
            onDeleteNote={onDeleteNote}
            onTogglePin={onTogglePin}
            onDuplicateNote={onDuplicateNote} />
    </section >
}



