import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes,setNotes }) {
    console.log('notes',notes)
    return <section className="note-list">
        {notes.map(note => <NotePreview note={note} setNotes={setNotes} key={note.id} />)}
    </section>

}
