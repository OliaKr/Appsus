import { NoteTitle } from "./note-title.jsx"

export function NoteImg({ info }) {
    const { title,url } = info
    return <section className="note-img">
        <img src={url} alt="" />
        {/* <div className="img-contaier"><img src={info.url} alt="" /></div> */}
        {title && <NoteTitle title={title}/>}
    </section>
}