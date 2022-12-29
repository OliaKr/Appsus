import { mailService } from "../services/mail.service.js"
import { Mailpreview } from "./mail-preview.jsx";

export function MailList({emails, togglePreview, onMoveToTrash}) {

    function togglePreview(emailId) {
        emails.map(email => {
            if (email.id === emailId) {
                console.log(email.isOpen);
                email.isOpen = !email.isOpen
                console.log('after change', email.isOpen);
                email.isRead = true;
                
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
                togglePreview={() => togglePreview(emails, email.id)}
                onMoveToTrash={() => onMoveToTrash(emails, email.id)}
                
              />
            );
          })}
        </div>
      );

    // return <table className= "main-list">

    //     <thead>
    //         <tr>
    //             <th>⭐</th>
    //             <th>Email </th>
    //             <th></th>
    //             <th></th>
    //             <th></th>
                



    //         </tr>



    //     </thead>




        
    // </table>



}
