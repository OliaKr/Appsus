const { Link, useParams } = ReactRouterDOM;

import { MailDetails } from "./mail-details.jsx";


export function Mailpreview({email, togglePreview, onMoveToTrash}) {
    const { emailId } = useParams()
    
    return (
        <div className='clean-link' >
              {!emailId && <div
                className={
                  email.isRead ? 'mail-preview flex' : 'mail-preview bold flex'
                }
                onClick={togglePreview}
              >
                <div className='star-preview'>⭐</div>
                <div className='from-preview'><a href={`./index.html#/mail/${email.id}`}> {email.from}</a></div>
                <div className='subject-preview'>{email.subject}</div>
                <div className='text-preview'>{email.body}</div>
                <button className='delete' onClick={() => onMoveToTrash(email.id)}>
                  move to trash
                </button>
              </div> }           
              {emailId && <MailDetails emailId={emailId}></MailDetails>}
        </div>
      );


}