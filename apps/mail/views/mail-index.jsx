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
        mailService.query().then(emailsToUpdate => setEmails(emailsToUpdate))
        console.log('emails after state', emails);
    }
    console.log('emails', emails);

    function onMoveToTrash(emails, emailId) {
        emails.forEach((email) => {
            if (email.id === emailId) email.isTrash = true
        });
        mailService.save(emails)
        
    }

    console.log('emails are emails', emails);
    return <div className="mail-index flex">

        {/* <h1>Hello from main index!</h1> */}

        <MailHeader/>
        
    
        < MailList emails={emails}
        onMoveToTrash={onMoveToTrash}
        
      
        />


    </div>
}

