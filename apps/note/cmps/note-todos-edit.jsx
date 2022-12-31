const { useState, useEffect } = React
import { noteService } from "../services/note.service.js"
import { NoteTodosList } from "./note-todos-list.jsx"

export function NoteTodosEdit({ note, setNotes, handleChange }) {
    const [todos, setTodos] = useState(note.info.todos)
    const { title } = note.info

    useEffect(() => {
        if (!todos.length) {
            setTodos([noteService.getDefaultTodo()])
        }
    }, [])

    function onRemoveTodo(todoId) {
        noteService.removeTodo(note.id, todoId)
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
    }

    function onSaveTodo(todoToSave) {
        const noteId = note.id
        const currTodo = todos.find(todo => todo.id === todoToSave.id)
        noteService.saveTodo(noteId, todoToSave)
        setTodos(prevTodos => ([...prevTodos]))
        const newInfo = { ...note.info, todos }
        noteService.save({ ...note, info: newInfo })
        setNotes(prevNotes => {
            const idx = prevNotes.findIndex(note => note.id === noteId)
            prevNotes.splice(idx, 1, note)
            return ([...prevNotes])
        })
    }

    function handleChangeTodo(todoId, target) {
        let { value, name: field } = target
        let currTodo = todos.find(todo => todo.id === todoId)
        currTodo[field] = value
        setTodos(prevTodos => ([...prevTodos]))
        noteService.save(note)
    }

    function handleCheckBoxChange(todoId, target) {
        let { checked } = target
        const currTodo = todos.find(todo => todo.id === todoId)
        currTodo.doneAt = checked ? Date.now() : null
        setTodos(prevTodos => ([...prevTodos]))
        noteService.save(note)
    }


    return <section className="note-todos-edit">
        <input className="no-border"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange} />
        <NoteTodosList
            todos={todos}
            onRemoveTodo={onRemoveTodo}
            onSaveTodo={onSaveTodo}
            handleChangeTodo={handleChangeTodo}
            handleCheckBoxChange={handleCheckBoxChange} />
    </section>
}


