
export function NoteImgEdit({ note, handleChange }) {
    const { url, title, txt } = note.info

    return <section className="note-txt-edit">
        <img src={note.info.url} alt="" />
        <input className="no-border"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange} />
        <textarea className="no-border"
            name="txt"
            placeholder="Take a note..."
            value={txt}
            onChange={handleChange} />
    </section>
}
