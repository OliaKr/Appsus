
export function NoteVideo({ info, handleChange }) {
    const { url, title } = info

    return <section className="note-video">
        <iframe width="200" height="100" src={url}
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowFullScreen"></iframe>
        <textarea className="no-border"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange} />
    </section>

}