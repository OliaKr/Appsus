import { NoteTitle } from "./note-title.jsx"

export function NoteTodos({ info }) {
    // console.log(info)
    return <section className="note-todos">NoteTodos
        {info.title && <NoteTitle title={info.title} />}
    </section>
}

