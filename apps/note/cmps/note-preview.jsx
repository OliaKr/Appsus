import { noteService } from "../services/note.service.js"
import { DynamicNote } from "./dynamic-note.jsx"

export function NotePreview({ note,setNotes }) {

    function onDeleteNote(ev,noteId){
        ev.stopPropagation()
        noteService.remove(noteId)
        .then(console.log)
        setNotes(prevNotes=> prevNotes.filter(note=>note.id !== noteId))

    }

    function onUpdateNote(){
        console.log('update');
    }


    return <section className="note-preview"
    onClick={onUpdateNote}>
        <DynamicNote type={note.type} info={note.info}
            onChangeInfo={info => onChangeInfo(note.id, info)} />
          <button onClick={(ev)=>onDeleteNote(ev,note.id)}><i class="fa-solid fa-trash-can"></i></button>  
    </section>
}

