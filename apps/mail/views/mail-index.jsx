import { MailList } from "../cmps/mail-list"

const {useState} = React



export function MailIndex() {

    const [emails, setEmails] = useState([])
    return <section className ="mail-index">
        <div className="full main-layout">

           
        </div>

        Hello from main index!
    </section>
}

