const { useState, Fragment } = React

import { NoteTitle } from "./note-title.jsx"

export function NoteTxt({ info }) {
    const { title, txt } = info

    // return <section className="note-txt" >
    //     {title && <NoteTitle title={title}/>}
    //     {txt}</section>
    return <Fragment>
        {title && <NoteTitle title={title} />}
        <section>{txt}</section>
    </Fragment>

}