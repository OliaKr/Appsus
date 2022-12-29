import { NoteTxt } from "./note-txt.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteVideo } from "./note-video.jsx"
import { NoteTodos } from "./note-todos.jsx"

export function DynamicNote({ type, info }) {
    // const className = note.style.backgroundColor ? 'no-border' : ''
    switch (type) {
        case 'note-txt':
            return <NoteTxt info={info} />

        case 'note-img':
            return <NoteImg info={info} />

        case 'note-video':
            return <NoteVideo info={info} />

        case 'note-todos':
            return <NoteTodos info={info} />
    }
}