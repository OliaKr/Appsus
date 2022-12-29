import { NoteImgEdit } from "./note-img-edit.jsx"
import { NoteTodosEdit } from "./note-todos-edit.jsx"
import { NoteTxtEdit } from "./note-txt-edit.jsx"
import { NoteVideoEdit } from "./note-video-edit.jsx"


export function DynamicEdit() {

    switch (type) {
        case 'note-txt':
            return <NoteTxtEdit info={info} />

        case 'note-img':
            return <NoteImgEdit info={info} />

        case 'note-video':
            return <NoteVideoEdit info={info} />

        case 'note-todos':
            return <NoteTodosEdit info={info} />
    }
}
