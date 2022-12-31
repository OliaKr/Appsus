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
    getEmptyTodosNote,
    getEmptyVideoNote,
    getEmptyImgNote,
    getDefaultFilter,
    getEmdeddedUrl,
    getColors,
    getDefaultTodo,
    removeTodo,
}

function getDefaultTodo() {
    return { txt: '', doneAt: null, id: utilService.makeId() }
}

function removeTodo(noteId, todoId) {
    const notes = utilService.loadFromStorage(NOTE_KEY)
    let note = notes.find((note) => note.id === noteId)
    console.log('note', note)
    const newTodos = note.info.todos.filter((todo) => todo.id !== todoId)
    note.info.todos = [...newTodos]
    storageService.put(NOTE_KEY, note)
    // utilService.saveToStorage(NOTE_KEY, notes)

    return Promise.resolve()
}

function _createTodo(todoToSave) {
    return {
        id: utilService.makeId(),
        ...todoToSave,
    }
}

function getEmptyNote() {
    return {
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

function getEmptyTodosNote() {
    return {
        type: "note-todos",
        isPinned: false,
        info: {
            todos: [],
            title: ''
        },
        style: {
            backgroundColor: 'white'
        },
    }
}

function getEmptyVideoNote() {
    return {
        type: "note-video",
        isPinned: false,
        info: {
            url: '',
            title: '',
            txt: '',
        },
        style: {
            backgroundColor: 'white'
        },
    }
}

function getEmptyImgNote() {
    return {
        type: "note-img",
        isPinned: false,
        info: {
            url: '',
            title: '',
            txt: '',
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

function getEmdeddedUrl(urlStr) {
    const res = urlStr.split("=")
    return "https://www.youtube.com/embed/" + res[1]
}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => regex.test(note.info.txt) || regex.test(note.info.title ||
                    regex.test(note.info.todos)))
            }
            if (filterBy.type) {
                notes = notes.filter(note => note.type === filterBy.type)
            }
            return notes
        })
}

function getDefaultFilter() {
    return { txt: '', type: '' }
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
    // note.createAt = Date.now()
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
                isPinned: false,
                info: {
                    title: "Get my stuff together",
                    todos: [
                        {
                            txt: "Driving liscence",
                            doneAt: null,
                            id: utilService.makeId()
                        },
                        {
                            txt: "Coding power",
                            doneAt: 187111111,
                            id: utilService.makeId()
                        }]
                },
                style: {
                    backgroundColor: 'white',
                },
            }, {
                id: "n102",
                type: "note-img",
                isPinned: true,
                info: {
                    url: "assets/img/audi.jpg",
                    title: "car to buy",
                    txt: "",
                },
                style: {
                    backgroundColor: "#fbbc04"
                }
            }, {
                id: "n104",
                type: "note-video",
                isPinned: false,
                info: {
                    url: "https://www.youtube.com/embed/7zhga7DLloI",
                    title: "funny video",
                    txt: "",
                },
                style: {
                    backgroundColor: "#ccff90"
                }
            }, {
                id: "n105",
                type: "note-video",
                isPinned: true,
                info: {
                    url: "https://www.youtube.com/embed/TCoITm8bdnM",
                    title: "graet song",
                    txt: "listen later",
                },
                style: {
                    backgroundColor: "#ccff90"
                }
            }, {
                id: "n106",
                type: "note-img",
                isPinned: false,
                info: {
                    url: "assets/img/liad.jpg",
                    title: "LONDON",
                    txt: "",
                },
                style: {
                    backgroundColor: "#a7ffeb"
                }
            }, {
                id: "n107",
                type: "note-todos",
                isPinned: true,
                info: {
                    title: "Get my stuff together",
                    todos: [
                        {
                            txt: "buy this",
                            doneAt: null,
                            id: utilService.makeId()
                        },
                        {
                            txt: "visit my uncle",
                            doneAt: 187111111,
                            id: utilService.makeId()
                        },
                        {
                            txt: "go to the gym",
                            doneAt: null,
                            id: utilService.makeId()
                        }]
                },
                style: {
                    backgroundColor: 'white',
                },
            }, {
                id: "n108",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "study React!",
                    title: 'Later'
                },
                style: {
                    backgroundColor: '#ccff90',
                },
            },
        ]
    }
    utilService.saveToStorage(NOTE_KEY, notes)
}