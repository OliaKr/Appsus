const { useState, useEffect } = React

import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from '../services/mail.service.js'
import { MailSearch } from "../cmps/mail-search.jsx"
import { MailDetails } from "../cmps/mail-details.jsx"
import { MailFolderList } from "../cmps/mail-folderList.jsx"
import { MailAdd } from "../cmps/mail-add.jsx"


export function MailIndex() {
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter)
    const [emails, setEmails] = useState([])
    const [isComposeMail,setComposeMail] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null)

    useEffect(() => {
        console.log('loading emails...');
        loadEmails()

    }, [filterBy])


    function loadEmails() {
        mailService.query(filterBy).then(emailsToUpdate => setEmails(emailsToUpdate))
    }

    const filterMailByType = (type) => {
        switch (type){
            case "inbox":
                mailService.query(filterBy).then(emailsToUpdate =>  setEmails(emailsToUpdate.filter((email) => email.from != mailService.getCurrentUser().fullname)));
                break;
            case "sent":
                mailService.query(filterBy).then(emailsToUpdate =>  setEmails(emailsToUpdate.filter(
                    (email) => email.from === mailService.getCurrentUser().fullname)));
                break; 
            case "read":
                mailService.query(filterBy).then(emailsToUpdate =>  setEmails(emailsToUpdate.filter((email) => email.isRead)));
                break;
            case "unread":
                mailService.query(filterBy).then(emailsToUpdate =>  setEmails(emailsToUpdate.filter((email) => !email.isRead)));
                break;
                

        }

    }

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
 
    return <div >
        <MailSearch onSetFilter={onSetFilter} />
        {!isComposeMail && <div className="container">
            <MailFolderList filterFunction={filterMailByType} />
            < MailList emails={emails} onMoveToTrash={onMoveToTrash}/>
            
            </div>
        }
        <button  onClick={()=>{setComposeMail(!isComposeMail)}}>Compose Mail</button>
        {selectedEmail &&<MailDetails  />}
        
        {isComposeMail && <MailAdd closeComposeMail={()=>{setComposeMail(false)} }/>}
    </div>
}
