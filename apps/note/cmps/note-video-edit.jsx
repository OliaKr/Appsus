const { Fragment } = React

export function NoteVideoEdit({ note, handleChange }) {
    const { url, title } = note.info

    return <Fragment>
        <textarea className="no-border"
            type="text"
            name="url"
            placeholder="Paste URL here"
            value={url}
            onChange={handleChange} />
        <textarea className="no-border"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange} />
    </Fragment>
}
