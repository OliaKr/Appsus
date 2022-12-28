export function NoteTxt({note}) {
    const {info,style} = note

    return <section className="note note-txt">{info.txt}</section>

}