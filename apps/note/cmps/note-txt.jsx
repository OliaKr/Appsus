
export function NoteTxt({ info, handleChange }) {
    const { title, txt } = info

    return <section className="note-txt" >
        <textarea className="no-border"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange} />
        <textarea className="no-border"
            type="text"
            name="txt"
            placeholder="Title"
            value={txt}
            onChange={handleChange}/>
        </section>
}