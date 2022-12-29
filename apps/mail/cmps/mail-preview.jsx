const { Link } = ReactRouterDOM;

import { mailService } from "../services/mail.service";


export function Mailpreview({email, togglePreview}) {
   
    // return <div className="mail-preview">
    //     {/* <h2>Mail from</h2>
    //     <h3>Mail to</h3> */}
    //     <div className='from-preview'>{email.from}</div>
    //     <div className='subject-preview'>{email.subject}</div>
    //     <div className="text-preview">{email.body}</div>



    // </div>

    return (
        <Link className='clean-link' to={'/mail'}>
          <div>
            {!email.isOpen ? (
              <div
                className={
                  email.isRead ? 'mail-preview flex' : 'mail-preview bold flex'
                }
                onClick={togglePreview}
              >
                <div className='star-preview'>⭐</div>
                <div className='from-preview'>{email.from}</div>
                <div className='subject-preview'>{email.subject}</div>
                <div className='text-preview'>{email.body}</div>
                {/* <button className='delete' onClick={onMoveToTrash}>
                  move to trash
                </button> */}
              </div>
            ) : (
              <div
                className='mail-preview-open flex-column'
                onClick={togglePreview}
              >

                
                <h1 className='subject-preview-open'>{email.subject}</h1>
                <div className='from-preview-open flex'>
                  <h2>{email.from}</h2> <h3>{email.to}</h3>
                </div>
                <div className='text-preview-open'>{email.body}</div>
                <div className='star-preview-open'>⭐</div>
              </div>
            )}
          </div>
        </Link>
      );


}