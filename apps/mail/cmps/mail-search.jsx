const { useState } = React

export function MailSearch({ onSetFilter }) {
    const [searchValue, setSearchValue] = useState('')

    function handleChange({ target }) {
        let { value, name: field } = target
        setSearchValue((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(searchValue)

    }

    return <div className="mail-header" >

        <form onSubmit={onSubmitFilter}>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
            <input type="text"
                id="bySearch"
                name="txt"
                value={searchValue.txt}
                onChange={handleChange}/>

        </form>
    </div>
}