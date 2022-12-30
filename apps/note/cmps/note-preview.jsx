import { DynamicNote } from "./dynamic-note.jsx"
import { OptionBar } from "./option-bar.jsx"

export function NotePreview({ note,onUpdateNote, onDeleteNote, changeColor, onTogglePin,onDuplicateNote }) {

    function onChangeColor(ev, color) {
        ev.stopPropagation()
        changeColor(color, note.id)
    }

    console.log('note.style', note.style)
    return <section className="note-preview"
        // onBlur={onToggleColorPicker}
        style={{ backgroundColor: note.style.backgroundColor }}
        onClick={() => onUpdateNote(note.id)}>
        <DynamicNote type={note.type} info={note.info} />
        <OptionBar note={note}
            onChangeColor={onChangeColor}
            onDeleteNote={onDeleteNote}
            onTogglePin={onTogglePin}
            onDuplicateNote={onDuplicateNote} />
    </section >
}



