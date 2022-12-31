
export function NoteVideoEdit({ note, handleChange }) {
    const {url,title,txt} = note.info

    return <section className="note-video-edit">
        <input className="no-border"
            type="text"
            name="url"
            placeholder="Paste URL here"
            value={url}
            onChange={handleChange} />
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
