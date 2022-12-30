const { useState, useEffect } = React

import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from '../services/mail.service.js'
import { MailSearch } from "../cmps/mail-search.jsx"
import { MailDetails } from "../cmps/mail.-details.jsx"
import {MailFolderList} from "../cmps/mail-folderList.jsx"


export function MailIndex() {
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter)
    const [emails, setEmails] = useState([])

    useEffect(() => {
        console.log('loading emails...' );
        loadEmails()

    }, [filterBy])


    function loadEmails() {
        mailService.query(filterBy).then(emailsToUpdate => setEmails(emailsToUpdate))
    }

    console.log('emails', emails);

    function onMoveToTrash(emails, emailId) {
        emails.forEach((email) => {
            if (email.id === emailId) email.isTrash = true
            console.log('emails trashed', emails);
        });
        mailService.save(emails)
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    // function onMoveToTrash(emailId) {
    //     mailService.save(emailId)
    //     .then(()  => {
    //         const updateEmails = emails.filter(email => email.id !== emailId)
    //         setEmails(updateEmails)


    //     })

    // }console.log('filterBy from mailIndex', filterBy);

    console.log('filterBy from mailIndex', filterBy);
    console.log('emails are emails', emails);
    return <div className="mail-index flex">


        <MailSearch onSetFilter={onSetFilter} />
        <MailFolderList/>
        < MailList emails={emails}
            onMoveToTrash={onMoveToTrash}


        />
        {/* {emailId && < MailDetails loadEmails={loadEmails} emailId = {emailId}
        
        />} */}


    </div>
}

