import { NoteTxt } from "./note-txt.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteVideo } from "./note-video.jsx"
import { NoteTodos } from "./note-todos.jsx"

export function NotePreview({ note }) {
    switch (note.type) {
        case 'note-txt':
            return <NoteTxt note={note}/>

        case 'note-img':
            return <NoteImg note={note}/>

        case 'note-video':
            return <NoteVideo note={note}/>

        case 'note-todos':
            return <NoteTodos note={note}/>
    }
    // return <div>note preview</div>
}

