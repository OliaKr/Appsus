const { Fragment } = React

import { utilService } from "../../../services/util.service.js"

export function NoteImgEdit({ note, saveImg, handleChange }) {
    const { title, txt } = note.info

    return <Fragment>
        <input type="file" class="file-input btn" name="url"
            onChange={(ev) => utilService.loadImageFromInput(ev, saveImg)}></input>
        <textarea className="no-border"
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


