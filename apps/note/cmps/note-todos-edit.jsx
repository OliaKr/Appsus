const { useState, useEffect, Fragment } = React
import { noteService } from "../services/note.service.js"
import { NoteTodosList } from "./note-todos-list.jsx"

export function NoteTodosEdit({ note, handleChange }) {
    const [todos, setTodos] = useState(note.info.todos)
    const { title } = note.info

    useEffect(() => {
        if (!todos.length || !todos[todos.length - 1].txt) {
            console.log('render another line')
            setTodos([...todos, noteService.getDefaultTodo()])
        }
    }, [])

    function onRemoveTodo(todoId) {
        noteService.removeTodo(note.id, todoId)
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
        // setNotes(prev=>([...prev]))
    }

    function handleChangeTodo(todoId, target) {
        let { value } = target
        let currTodo = todos.find(todo => todo.id === todoId)
        currTodo.txt = value
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

    return <Fragment>
        <textarea className="no-border"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange} />
        <NoteTodosList
            todos={todos}
            onRemoveTodo={onRemoveTodo}
            handleChangeTodo={handleChangeTodo}
            handleCheckBoxChange={handleCheckBoxChange} />
    </Fragment>
}



