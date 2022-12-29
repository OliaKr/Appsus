const { useState, useEffect } = React

import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from '../services/mail.service.js'
import { MailHeader } from "../cmps/mail-header.jsx"
import { MailDetails } from "../cmps/mail.-details.jsx"


export function MailIndex() {

    const [emails, setEmails] = useState([])
    // const {emailId}= useParams()


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
            console.log('emails trashed', emails);
        });
        mailService.save(emails)
        
    }

    // function onMoveToTrash(emailId) {
    //     mailService.save(emailId)
    //     .then(()  => {
    //         const updateEmails = emails.filter(email => email.id !== emailId)
    //         setEmails(updateEmails)


    //     })
        
    // }

    console.log('emails are emails', emails);
    return <div className="mail-index flex">

        {/* <h1>Hello from main index!</h1> */}

        <MailHeader/>
        
    
        < MailList emails={emails}
        onMoveToTrash={onMoveToTrash}
        
      
        />
        {/* {emailId && < MailDetails loadEmails={loadEmails} emailId = {emailId}
        
        />} */}


    </div>
}

