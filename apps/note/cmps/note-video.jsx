import { NoteTitle } from "./note-title.jsx"

export function NoteVideo({info}) {
    console.log(info);
    return <section className="note-video">NoteVideo
        {info.title && <NoteTitle title={info.title}/>}
    </section>

}