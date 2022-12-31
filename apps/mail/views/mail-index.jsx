const { useState, useEffect } = React

import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from '../services/mail.service.js'
import { MailSearch } from "../cmps/mail-search.jsx"
import { MailDetails } from "../cmps/mail-details.jsx"
import { MailFolderList } from "../cmps/mail-folderList.jsx"
import { MailAdd } from "../cmps/mail-add.jsx"
import { EmailCounter } from "../cmps/mail-counter.jsx"


export function MailIndex() {
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [emails, setEmails] = useState([])
    const [isComposeMail, setComposeMail] = useState(false)
    // const [selectedEmail, setSelectedEmail] = useState(null)

    useEffect(() => {
        console.log('loading emails...')
        loadEmails()
    }, [filterBy])


    function loadEmails() {
        mailService.query(filterBy)
            .then(emails => setEmails(emails.filter(email => !email.isTrash)))
    }

    const filterMailByType = (type) => {
        switch (type) {
            case "inbox":
                mailService.query(filterBy)
                    .then(filteredEmails => setEmails(filteredEmails.filter(
                        (email) => email.from !== mailService.getCurrentUser().fullname && !email.isTrash)))
                break
            case "sent":
                mailService.query(filterBy)
                    .then(filteredEmails => setEmails(filteredEmails.filter(
                        email => email.from === mailService.getCurrentUser().fullname && !email.isTrash)))
                break
            case "read":
                mailService.query(filterBy)
                    .then(filteredEmails => setEmails(filteredEmails.filter(email => email.isRead && !email.isTrash)))
                break
            case "unread":
                mailService.query(filterBy)
                    .then(filteredEmails => setEmails(filteredEmails.filter(email => !email.isRead && !email.isTrash)))
                break
            case "trash":
<<<<<<< HEAD
                mailService.query(filterBy)
                    .then(filteredEmails => setEmails(filteredEmails.filter(email => email.isTrash)))
                break
            case "star":
                mailService.query(filterBy)
                    .then(filteredEmails => setEmails(filteredEmails.filter(email => email.star)))
                break
=======
                mailService.query(filterBy).then(emailsToUpdate => setEmails(emailsToUpdate.filter((email) => email.isTrash)));
                break;

            default:
                console.log("field is kind of odd", field);

>>>>>>> origin/main
        }
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onMoveToTrash(ev, emailId) {
        ev.stopPropagation()
        const currEmail = emails.find(email => email.id === emailId)
        if (currEmail.isTrash) {
            mailService.remove(emailId)
            setEmails(prevEmails => prevEmails.filter(email => emailId !== email.id))
        } else {
            currEmail.isTrash = true
            mailService.save(currEmail)
            setEmails(prevEmails => prevEmails.filter(email => !email.isTrash))
        }
        console.log('removed')
    }


    return <main className="mail-index">
        <MailSearch onSetFilter={onSetFilter} />
        <button className="compose-btn" onClick={() => { setComposeMail(prev => !prev) }}>
            <i class="fa-solid fa-pen"></i> Compose</button>
        {!isComposeMail && <div className="container">
            <MailFolderList filterFunction={filterMailByType} />
<<<<<<< HEAD
            {emails.length > 0 && < MailList emails={emails} onMoveToTrash={onMoveToTrash} />}
            {!emails.length && <div>No mails to display</div>}
=======
            < MailList emails={emails} onMoveToTrash={onMoveToTrash} />
            {/* <EmailCounter /> */}
            
            

>>>>>>> origin/main
        </div>
        }
        {/* {selectedEmail && <MailDetails />} */}

        {isComposeMail && <MailAdd closeComposeMail={() => { setComposeMail(false) }} />}
    </main>
}

