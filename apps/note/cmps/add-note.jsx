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

    function onYoutubeClick() {
        setNewNote(noteService.getEmptyVideoNote())
        console.log(newNote)
        setIsExpanded(true)
    }

    function onImageClick() {
        setNewNote(noteService.getEmptyImgNote())
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
        if (newNote.info.txt || newNote.info.url) {
            noteService.post(newNote)
                .then(note => {
                    setNotes(prevNotes => [...prevNotes, note])
                })
        }
        setIsExpanded(false)
        setNewNote(null)
    }

    // function onCloseEdit(ev) {
    //     console.log(ev.relatedTarget)
    //     if (ev.relatedTarget) return
    //     if (noteToEdit.info.txt || noteToEdit.info.url) {
    //         console.log('noteToEdit', noteToEdit)
    //         noteService.save(noteToEdit)
    //         const currNote = notes.find(note => note.id === noteId)
    //         currNote.info = { ...noteToEdit.info }
    //         setNotes(prevNotes => ([...prevNotes]))
    //     }
    //     navigate('/note')
    // }

    function handleChange({ target }) {
        let { value, name: field } = target
        console.log('value, field', value, field)
        setNewNote(prevNote => {
            value = field === 'url' ? noteService.getEmdeddedUrl(value) : value
            console.log('prevNote', prevNote)
            const newInfo = { ...prevNote.info, [field]: value }
            return { ...prevNote, info: newInfo }
        })
    }

    return <section className="add-note"
        onBlur={onCloseNote}
    >
        {!isExpanded && <Fragment>
            {/* <form> */}
            <textarea className="no-border"
                name="txt"
                onClick={onInputClick}
                placeholder="Take a note..."
                value={newNote ? newNote.info.txt : ''}
                onChange={handelChange} />
            {/* </form> */}
            <button onClick={onCheckboxClick}><i className="fa-regular fa-square-check"></i></button>
            <button onClick={onYoutubeClick}><i className="fa-brands fa-youtube"></i></button>
            <button onClick={onImageClick}><i className="fa-regular fa-image"></i></button>
        </Fragment>}
        {isExpanded && <DynamicEdit note={newNote} handleChange={handleChange} />}


    </section>
}

