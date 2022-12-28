export function NoteImg({ note, className }) {
    const { info, style } = note
    return <section className={`note note-img ${className}`} style={{ backgroundColor: style.backgroundColor }}>
        <img src={info.url} alt="" />
        {/* <div className="img-contaier"><img src={info.url} alt="" /></div> */}
        <h3>{info.title}</h3>
    </section>
}