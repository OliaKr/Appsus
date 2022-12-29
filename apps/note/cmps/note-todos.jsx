import { NoteTitle } from "./note-title.jsx"

export function NoteTodos({ info }) {
    const { title, todos } = info
    // console.log(info)
    return <section className="note-todos">NoteTodos
        {/* {info.title && <NoteTitle title={info.title} />} */}
        <NoteTitle title={title} />
        <ul className="todos-list">
            {todos.map((todo, idx) => <li key={idx}
                className={todo.doneAt ? 'done' : ''}>
                {todo.txt}
            </li>)}
        </ul>

    </section>
}



