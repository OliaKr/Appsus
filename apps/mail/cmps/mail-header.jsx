const {useState} = React

import { mailService } from "../services/mail.service.js"

export function MailHeader() {

    const [filterByToEdit, setFilterbyToEdit] = useState(mailService.getDefaultFilter)
    console.log('filterByToEdit', filterByToEdit);

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        // console.log('field', field);
        // console.log('value', value);
        setFilterbyToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    return <div className="mail-header">

       <form >

        <label htmlFor="from">Search</label>
        <input type="text" 
        id = "from"
        name="txt"
        value={filterByToEdit.txt}
        onChange={handleChange} />
        
       </form>
    </div>   
}