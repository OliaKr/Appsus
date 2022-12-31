import { NoteTodosList } from "./note-todos-list.jsx"

export function NoteTodos({ info, handleChange }) {
    const { label, todos } = info
    return <section className="note-todos">
        <textarea className="no-border"
            type="text"
            name="label"
            placeholder="Title"
            value={label}
            onChange={handleChange} />
        <NoteTodosList todos={todos} />
    </section>
}



