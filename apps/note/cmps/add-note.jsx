const { useState, useEffect, Fragment } = React

import { DynamicEdit } from "./dynamic-edit.jsx"

import { noteService } from "../services/note.service.js"

export function AddNote({ setNotes }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [newNote, setNewNote] = useState(null)


    function onInputClick() {
        if (!newNote) setNewNote(noteService.getEmptyNote())
        setIsExpanded(true)
    }

    function onCheckboxClick() {
        setNewNote(noteService.getEmptyTodosNote())
        console.log(newNote)
        setIsExpanded(true)
    }

    function handelChange({ target }) {
        let { value, name: field } = target
        setNewNote(prevNote => {
            const newInfo = { ...prevNote.info, [field]: value }
            return { ...prevNote, info: newInfo }
        })
    }
    function onCloseNote(ev) {
        console.log(ev.relatedTarget)
        if (ev.relatedTarget) return
        if (newNote.info.txt) {
            noteService.post(newNote).then(note => {
                setNotes(prevNotes => [...prevNotes, note])
            })
        }
        setIsExpanded(false)
        setNewNote(null)
    }

    function handleChange({ target }) {
        let { value, name: field } = target
        console.log('value, field', value, field)
        setNewNote(prevNote => {
            console.log('prevNote', prevNote)
            const newInfo = { ...prevNote.info, [field]: value }
            return { ...prevNote, info: newInfo }
        })
    }

    return <section className="add-note"
        onBlur={onCloseNote}>
        {!isExpanded && <Fragment>
            {/* <form> */}
            <textarea className="no-border"
                name="txt"
                onClick={onInputClick}
                placeholder="Take a note..."
                value={newNote ? newNote.info.txt : ''}
                onChange={handelChange} />
            <button onClick={onCheckboxClick}><i className="fa-regular fa-square-check"></i></button>
            {/* </form> */}
        </Fragment>}
        {isExpanded && <DynamicEdit note={newNote} handleChange={handleChange} />}


    </section>
}

