import { NoteImgEdit } from "./note-img-edit.jsx"
import { NoteTodosEdit } from "./note-todos-edit.jsx"
import { NoteTxtEdit } from "./note-txt-edit.jsx"
import { NoteVideoEdit } from "./note-video-edit.jsx"


export function DynamicEdit({ note, handleChange, handelCheckBoxChange}) {

    switch (note.type) {
        case 'note-txt':
            return <NoteTxtEdit note={note} 
            handleChange={handleChange} />

        case 'note-img':
            return <NoteImgEdit note={note} 
            handleChange={handleChange} />

        case 'note-video':
            return <NoteVideoEdit note={note} 
            handleChange={handleChange} />

        case 'note-todos':
            return <NoteTodosEdit note={note} 
            handleChange={handleChange} 
            handelCheckBoxChange={handelCheckBoxChange}/>
    }
}
