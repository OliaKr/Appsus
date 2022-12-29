const { useState, useEffect } = React

import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from '../services/mail.service.js'
import { MailHeader } from "../cmps/mail-header.jsx"




export function MailIndex() {

    const [emails, setEmails] = useState([])


    useEffect(() => {
        loadEmails()


    }, [])

    function loadEmails() {
        mailService.query().then(emails => setEmails(emails))
    }

    console.log('emails are emails', emails);
    return <div className="mail-index flex">

        {/* <h1>Hello from main index!</h1> */}

        <MailHeader/>
        
        


        < MailList emails={emails}
      
        />


    </div>
}

