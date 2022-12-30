import { NoteTodosPreview } from "./note-todo-preview.jsx"

import { noteService } from "../services/note.service.js"

export function NoteTodosList({ todos, onSaveTodo, onRemoveTodo, handleCheckBoxChange, handleChangeTodo }) {

    return <ul className="todos-list">
        {/* <li key={'001'}>
            <NoteTodosPreview todo={noteService.getDefaultTodo()}
                onRemoveTodo={onRemoveTodo}
                handelCheckBoxChange={handleCheckBoxChange}
                handleChangeTodo={handleChangeTodo} />
        </li> */}
        {todos.map(todo => <li key={todo.id}
            onBlur={() => onSaveTodo(todo)}>
            <NoteTodosPreview todo={todo} onRemoveTodo={onRemoveTodo}
                handelCheckBoxChange={handleCheckBoxChange}
                handleChangeTodo={handleChangeTodo} />
        </li>
        )}
    </ul>
}

