import { mailService } from "../services/mail.service.js"
import { Mailpreview } from "./mail-preview.jsx";

export function MailList({emails}) {
    
    return (
        <div className='mail-list'>
          {emails.map((email) => {
            return (
              <Mailpreview
                key={email.id}
                email={email}
                
              />
            );
          })}
        </div>
      );



}
