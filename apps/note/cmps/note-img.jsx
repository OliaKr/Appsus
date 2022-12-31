
export function NoteImg({ info, handleChange }) {
    const { title, url } = info
    return <section className="note-img">
        {url && <img src={url} alt="" />}
        <textarea className="no-border"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange}
        />
    </section>
}
