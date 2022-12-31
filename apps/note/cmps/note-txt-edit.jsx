const { Fragment } = React


export function NoteTxtEdit({ note, handleChange }) {
    const { txt, title } = note.info

    return <Fragment>
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
    </Fragment>
}
