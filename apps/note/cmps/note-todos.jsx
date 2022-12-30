import { NoteTitle } from "./note-title.jsx"

export function NoteTodos({ info }) {
    const { label, todos } = info
    // console.log(info)
    return <section className="note-todos">
        <NoteTitle title={label} />
        <ul className="todos-list">
            {todos.map(todo => <li key={todo.id}
                className={todo.doneAt ? 'done' : ''}>
                {todo.txt}
            </li>)}
        </ul>

    </section>
}



