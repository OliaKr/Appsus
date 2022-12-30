const { useState } = React

import { mailService } from "../services/mail.service.js"

export function MailSearch({ onSetFilter }) {

    const [filterByToEdit, setFilterbyToEdit] = useState(mailService.getDefaultFilter)
    // console.log('filterByToEdit', filterByToEdit);

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterbyToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)

    }

    return <div className="mail-header" >

        <form onSubmit={onSubmitFilter}>

            <label htmlFor="bySearch"></label>
            <input type="text"
                id="bySearch"
                name="txt"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />
            <button>Search mail</button>

        </form>
    </div>
}