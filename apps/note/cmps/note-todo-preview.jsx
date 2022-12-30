const  { Fragment } = React


export function NoteTodosPreview({ todo, onRemoveTodo, handleCheckBoxChange, handleChangeTodo }) {

return <Fragment>
    <button onClick={() => onRemoveTodo(todo.id)}>x</button>
            <input type="text"
                className={`todo-txt ${todo.doneAt ? 'done' : ''}`}
                name="txt"
                value={todo.txt}
                onChange={(ev) => handleChangeTodo(todo.id, ev.target)}
            />
            <input type="checkbox"
                checked={todo.doneAt ? true : false}
                onChange={(ev) => handleCheckBoxChange(todo.id, ev.target)}
            />
</Fragment>
}