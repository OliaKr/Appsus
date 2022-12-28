const { useState, useEffect } = React

import { NoteList } from "../cmps/note-list.jsx"

import { noteService } from "../services/note.service.js"

export function NoteIndex() {
    const [notes,setNotes] = useState([])

    useEffect(()=>{
        noteService.query()
        .then(notes=>{
            setNotes(notes)
        })
    },[])

    return <section className="note-index">
        <NoteList notes={notes}/>
    </section>

}
