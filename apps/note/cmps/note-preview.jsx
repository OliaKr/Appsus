import { NoteTxt } from "./note-txt.jsx"
import { NoteImg } from "./note-img.jsx"
import { NoteVideo } from "./note-video.jsx"
import { NoteTodos } from "./note-todos.jsx"

export function NotePreview({ note }) {
    const className = note.style.backgroundColor ? 'no-border' : ''
    switch (note.type) {
        case 'note-txt':
            return <NoteTxt note={note} className={className}/>

        case 'note-img':
            return <NoteImg note={note} className={className}/>

        case 'note-video':
            return <NoteVideo note={note} className={className}/>

        case 'note-todos':
            return <NoteTodos note={note} className={className}/>
    }
    // return <div>note preview</div>
}

