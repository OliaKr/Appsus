const { useState, useEffect } = React

import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from '../services/mail.service.js'
import { MailSearch } from "../cmps/mail-search.jsx"
import { MailDetails } from "../cmps/mail.-details.jsx"
import { MailFolderList } from "../cmps/mail-folderList.jsx"
import { MailAdd } from "../cmps/mail-add.jsx"


export function MailIndex() {
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter)
    const [emails, setEmails] = useState([])
    const [selectedEmail, setSelectedEmail] = useState(null)

    useEffect(() => {
        console.log('loading emails...');
        loadEmails()

    }, [filterBy])


    function loadEmails() {
        mailService.query(filterBy).then(emailsToUpdate => setEmails(emailsToUpdate))
    }

    console.log('emails', emails);

    // function onMoveToTrash(emails, emailId) {
    //     emails.forEach((email) => {
    //         if (email.id === emailId) email.isTrash = true
    //         console.log('emails trashed', emails);
    //     });
    //     mailService.save(emails)
    // }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onMoveToTrash(emails, emailId) {
        console.log('Removing', emails)
        mailService.remove(emailId)
            .then(() => {
                const updateEmails = emails.filter(email => email.id !== emailId)
                setEmails(updateEmails)
                // console.log('removed')
            })

            .catch(err => {
                console.log('Had error:', err)
            })
    }


    console.log('filterBy from mailIndex', filterBy);
    console.log('emails are emails', emails);
    return <div className="mail-index flex">


        <MailSearch onSetFilter={onSetFilter} />
        <MailFolderList />
        < MailList emails={emails}
            onMoveToTrash={onMoveToTrash}
        />
        {selectedEmail &&<MailDetails />}
        {/* {emailId && < MailDetails loadEmails={loadEmails} emailId = {emailId}
        
        />} */}

        <MailAdd/>




    </div>
}

