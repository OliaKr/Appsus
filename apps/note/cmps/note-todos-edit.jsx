
export function NoteTodosEdit({ note, handleChange, handelCheckBoxChange }) {
    const { title, todos } = note.info

    return <section className="note-todos-edit">
        <input className="no-border"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleChange} />
        <ul className="todos-list">
            {todos.map((todo, idx) => {
                const isChecked = todo.doneAt ? true : false
                console.log('isChecked',isChecked);
                return <li key={idx}
                    className={todo.doneAt ? 'done' : ''}>
                    <button>x</button>
                    {todo.txt}
                    <input type="checkbox"
                        checked={isChecked}
                        onChange={handelCheckBoxChange} />
                </li>
            })}
        </ul>

    </section>
}
