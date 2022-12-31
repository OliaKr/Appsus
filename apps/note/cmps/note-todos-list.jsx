import { NoteTodosPreview } from "./note-todo-preview.jsx"


export function NoteTodosList({ todos, onRemoveTodo, handleCheckBoxChange, handleChangeTodo }) {
    console.log('todos', todos)
    return <ul className="todos-list">
        {todos.map(todo => <li key={todo.id}>
            <NoteTodosPreview todo={todo}
                onRemoveTodo={onRemoveTodo}
                handleCheckBoxChange={handleCheckBoxChange}
                handleChangeTodo={handleChangeTodo} />
        </li>
        )}
    </ul>
}

