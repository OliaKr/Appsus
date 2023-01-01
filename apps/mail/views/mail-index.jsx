const { useState, useEffect } = React

import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from '../services/mail.service.js'
import { MailSearch } from "../cmps/mail-search.jsx"
import { MailFolderList } from "../cmps/mail-folderList.jsx"
import { MailAdd } from "../cmps/mail-add.jsx"
import { ProgressCount } from "../cmps/progress-counter.jsx"


export function MailIndex() {
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter());
    const [currentTab,setTab] = useState("inbox");
    const [emails, setEmails] = useState([])
    const [allEmails, setAllEmails] = useState([])
    const [isComposeMail, setComposeMail] = useState(false)
    // const [selectedEmail, setSelectedEmail] = useState(null)

    useEffect(() => {
        console.log('loading emails...')
        loadEmails()
    }, [filterBy])


    function loadEmails() {
        filterMailByType(currentTab);
    }

    const filterMailByType = (type) => {
        setTab(type);
        switch (type) {
            
            case "sent":                
                mailService.query(filterBy).then(emailsToUpdate => setEmails(emailsToUpdate.filter(
                    (email) => email.from === mailService.getCurrentUser().fullname)));
                break;
            case "read":
                mailService.query(filterBy).then(emailsToUpdate => setEmails(emailsToUpdate.filter((email) => email.isRead && !email.isTrash )));
                break;
            case "unread":
                mailService.query(filterBy).then(emailsToUpdate => setEmails(emailsToUpdate.filter((email) => !email.isRead && !email.isTrash)));
                break;
            case "trash":
                mailService.query(filterBy).then(emailsToUpdate => setEmails(emailsToUpdate.filter((email) => email.isTrash)));
                break;
            case "star":
                mailService.query(filterBy)
                    .then(filteredEmails => setEmails(filteredEmails.filter(email => email.star)))
            default:            
            mailService.query(filterBy).then(emailsToUpdate => setEmails(emailsToUpdate.filter(
                (email) => email.from != mailService.getCurrentUser().fullname  && !email.isTrash )));
                break;

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

    
    function getReadPrecentage(){
        // mailService.query().then(emails=> emails.filter((emails=>emails.isRead)))
        mailService.query().then((mails) => {
            setAllEmails(mails) 
        } )
    
        let readMails = allEmails.filter((email)=> email.isRead);
        return Math.floor(100 * readMails.length/allEmails.length);
        
    }


    return <main className="mail-index">
        <MailSearch onSetFilter={onSetFilter} />
        <button className="compose-btn" onClick={() => { setComposeMail(prev => !prev) }}>
            <i className="fa-solid fa-pen"></i> Compose</button>
        {!isComposeMail && <div className="container">
            <MailFolderList filterFunction={filterMailByType} />
            {emails.length > 0 && < MailList emails={emails} onMoveToTrash={onMoveToTrash} />}
            {!emails.length && <div>No mails to display</div>}
        </div>
        }
        <ProgressCount percentage={getReadPrecentage()}></ProgressCount>

        {/* {selectedEmail && <MailDetails />} */}
        
        {isComposeMail && <MailAdd closeComposeMail={() => { setComposeMail(false) }} />}
    </main>
}



