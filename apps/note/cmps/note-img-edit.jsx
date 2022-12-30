import { utilService } from "../../../services/util.service.js"

export function NoteImgEdit({ note, handleChange }) {
    const { url, title, txt } = note.info

    return <section className="note-txt-edit">
        <input type="file" class="file-input btn" name="url" 
        // value={url}
        onInput={utilService.onImgInput}
        onchange={handleChange}></input>
        {url && <img src={url} alt="" />}
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
