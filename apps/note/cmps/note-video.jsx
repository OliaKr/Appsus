import { NoteTitle } from "./note-title.jsx"

export function NoteVideo({ info }) {
    const { url, title, txt } = info

    return <section className="note-video">
        <iframe width="200" height="100" src={url}
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen="allowfullscreen"></iframe>
        {title && <NoteTitle title={title} />}
        <p>{txt}</p>
    </section>

}