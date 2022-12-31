import { mailService } from "../services/mail.service.js"
import { Mailpreview } from "./mail-preview.jsx";

export function MailList({emails, onMoveToTrash}) {

    function togglePreview(emailId) {
      console.log("in toggle oreview");
        emails.map(email => {
            if (email.id === emailId) {
                console.log(email.isOpen);
                email.isOpen = !email.isOpen
                console.log('after change', email.isOpen);
                email.isRead = true;
                mailService.save(email).then(()=>{console.log("success saving")})
            }
        })
        
    }
    
    return (
        <div className='mail-list'>
          {emails.map((email) => {
            return (
              <Mailpreview
                key={email.id}
                email={email}
                togglePreview={() => togglePreview(email.id)}
                onMoveToTrash={() => onMoveToTrash(emails, email.id)}
                
              />
            );
          })}
        </div>
      );
}
