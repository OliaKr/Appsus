import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, changeColor, onDuplicateNote, onTogglePin, onDeleteNote }) {

    return <section className="note-list">
        {notes.map(note => <NotePreview
            note={note}
            onDeleteNote={onDeleteNote}
            changeColor={changeColor}
            onTogglePin={onTogglePin}
            onDuplicateNote={onDuplicateNote}
            key={note.id} />)}
    </section>
}



