
import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React


export function AddNote({setNotes}) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [newNote, setNewNote] = useState(null)


    function onInputClick() {
        if(!newNote) setNewNote(noteService.getEmptyNote())
        setIsExpanded(true)
    }

    function handelChange({ target }) {
        let { value, name: field } = target
        setNewNote(prevNote => {
            const newInfo = { ...prevNote.info, [field]: value }
            return { ...prevNote, info: newInfo }
        })
    }
    function onCloseNote() {
        if (newNote.info.txt) {
            noteService.post(newNote).then(note=>{
                setNotes(prevNotes=> [...prevNotes,note])
            })
        }
        setIsExpanded(false)
        setNewNote(null)
    }

    return <section className="add-note">
        {isExpanded && <input className="no-border"
            type="text"
            name="title"
            placeholder="Title"
            value={newNote.info.title}
            onChange={handelChange} />}
        <textarea className="no-border"
            name="txt"
            onClick={onInputClick}
            placeholder="Take a note..."
            value={newNote ? newNote.info.txt : ''}
            onChange={handelChange} />
        {isExpanded && <button onClick={onCloseNote}>Close</button>}
        <section hidden={!isExpanded}></section> {/* add here the options ber cmps */}

    </section>
}

``