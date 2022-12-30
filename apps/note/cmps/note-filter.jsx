const { useState, useEffect } = React

import { noteService } from "../services/note.service"


export function NoteFilter({ setFilterBy }) {

    return <aside className="note-filter">

        <div title="all" 
        onClick={() => setFilterBy(prevFilter => ({ ...prevFilter, type: '' }))}>
            <i className="side-bar-icons fas fa-mail-bulk"></i>
        </div>
        <div title="notes" 
        onClick={() => setFilterBy(prevFilter => ({ ...prevFilter, type: 'note-txt' }))}>
            <i className="fa-regular fa-note-sticky"></i>
        </div>
        <div title="todos" 
        onClick={() => setFilterBy(prevFilter => ({ ...prevFilter, type: 'note-todos' }))}>
            <i className="fa-solid fa-list-check"></i>
        </div>
        <div title="images" 
        onClick={() => setFilterBy(prevFilter => ({ ...prevFilter, type: 'note-img' }))}>
            <i className="fa-regular fa-image"></i>
        </div>
        <div title="videos" 
        onClick={() => setFilterBy(prevFilter => ({ ...prevFilter, type: 'note-video' }))}>
            <i className="fa-brands fa-youtube"></i>
        </div>
        {/* <div onClick={() => setFilterByToEdit(prevFilter => ({ ...prevFilter, type: '' }))}>
            <i className="side-bar-icons fas fa-photo-video"></i>
        </div> */}

    </aside>
}