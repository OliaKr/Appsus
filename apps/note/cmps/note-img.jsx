export function NoteImg({ note }) {
    const {info,style} = note
    return <section className="note note-img" style={{backgroundColor: style.backgroundColor}}>
        <h3>{info.title}</h3>
        <img src={info.url} alt="" />
    </section>
}