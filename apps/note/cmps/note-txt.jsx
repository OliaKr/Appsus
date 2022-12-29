import { NoteTitle } from "./note-title.jsx"

export function NoteTxt({info}) {
    const {title,txt} = info

    return <section className="note-txt" >
        {title && <NoteTitle title={title}/>}
        {txt}</section>

}