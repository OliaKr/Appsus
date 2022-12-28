export function NoteTxt({note,className}) {
    const {info,style} = note

    return <section className={`note note-txt ${className}`}>{info.txt}</section>

}