const { useState, Fragment } = React

import { DynamicEdit } from "./dynamic-edit.jsx"

import { noteService } from "../services/note.service.js"


export function AddNote({ setNotes }) {
    const [newNote, setNewNote] = useState(noteService.getEmptyNote())


    function onInputClick() {
        setNewNote(noteService.getEmptyNote())
    }

    function onCheckboxClick() {
        setNewNote(noteService.getEmptyTodosNote())
    }

    function onYoutubeClick() {
        setNewNote(noteService.getEmptyVideoNote())
    }

    function onImageClick() {
        setNewNote(noteService.getEmptyImgNote())
    }

    function onSaveNote() {
        noteService.save(newNote)
        setNotes(prevNotes => ([...prevNotes, newNote]))
        setNewNote(noteService.getEmptyNote())
    }

    function handleChange({ target }) {
        let { value, name: field } = target
        setNewNote(prevNote => {
            if (field === 'url') prevNote.info.url = noteService.getEmdeddedUrl(value)
            else prevNote.info[field] = value
            return { ...prevNote }
        })
    }

    function saveImg(img) {
        setNewNote(prevNote => {
            prevNote.info.url = img.src
            return { ...prevNote }
        })
    }

    console.log('newNote', newNote)

    return <Fragment>
        <section className="add-note">
            <button onClick={onInputClick}><i className="fa-regular fa-note-sticky"></i></button>
            <button onClick={onCheckboxClick}><i className="fa-solid fa-list-check"></i></button>
            <button onClick={onYoutubeClick}><i className="fa-brands fa-youtube"></i></button>
            <button onClick={onImageClick}><i className="fa-regular fa-image"></i></button>
        </section>
        <section className="dynamic-edit">
            <DynamicEdit
                note={newNote}
                handleChange={handleChange}
                saveImg={saveImg} />
            <button onClick={onSaveNote}><i className="fa-solid fa-floppy-disk"></i></button>
        </section>
    </Fragment>
}

