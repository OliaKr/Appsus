import { storageService } from "../../../services/async-storage.service.js"
import { utilService } from "../../../services/util.service.js"

const NOTE_KEY = 'noteDB'

_createNotes()

export const noteService = {
    query,
    save,
    get,
    post,
    remove,
    getEmptyNote,
    getColors,

}

function getEmptyNote() {
    return {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        // createdAt: Date.now(),
        info: {
            txt: '',
            title: ''
        },
        style: {
            backgroundColor: 'white'
        },
    }
}

function getColors() {
    return [
        '#e8eaed',
        '#e6c9a8',
        '#fdcfe8',
        '#aecbfa',
        '#cbf0f8',
        '#a7ffeb',
        '#ccff90',
        '#fff475',
        '#f28b82',
        '#fbbc04',
    ]
}

function query() {
    return storageService.query(NOTE_KEY)
        .then(notes => notes)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function post(note) {
    note.createAt = Date.now()
    return storageService.post(NOTE_KEY, note)
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!",
                    title: ''
                },
                style: {
                    backgroundColor: 'white',
                },
            }, {
                id: "n103",
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }]
                },
                style: {
                    backgroundColor: 'white',
                },
            }, {
                id: "n102",
                type: "note-img",
                info: {
                    url: "assets/img/audi.jpg",
                    // url: "https://www.w3schools.com/images/w3schools_green.jpg",
                    title: "Bobi and Me",
                    txt: "",
                },
                style: {
                    backgroundColor: "#00d"
                }
            }
        ]
    }
    utilService.saveToStorage(NOTE_KEY, notes)
}