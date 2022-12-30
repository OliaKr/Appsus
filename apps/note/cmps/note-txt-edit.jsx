

export function NoteTxtEdit({ note, handleChange }) {
    console.log('note.info.txt', note.info.txt)
    return <section className="note-txt-edit">
        <input className="no-border"
            type="text"
            name="title"
            placeholder="Title"
            value={note.info.title}
            onChange={handleChange} />
        <textarea className="no-border"
            name="txt"
            placeholder="Take a note..."
            value={note.info.txt}
            onChange={handleChange} />
    </section>
}
