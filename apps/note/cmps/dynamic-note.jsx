import { NoteTxt } from "./note-txt.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteVideo } from "./note-video.jsx"
import { NoteTodosEdit } from "./note-todos-edit.jsx"

export function DynamicNote({ note, handleChange }) {
    const { type, info } = note
    switch (type) {
        case 'note-txt':
            return <NoteTxt info={info}
                handleChange={handleChange} />

        case 'note-img':
            return <NoteImg info={info}
                handleChange={handleChange} />

        case 'note-video':
            return <NoteVideo info={info}
                handleChange={handleChange} />

        case 'note-todos':
            return <NoteTodosEdit note={note}
                handleChange={handleChange} />
    }
}