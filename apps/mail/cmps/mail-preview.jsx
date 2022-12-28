import { mailService } from "../services/mail.service";


export function Mailpreview({email}) {
   
    return <div className="mail-preview">
        {/* <h2>Mail from</h2>
        <h3>Mail to</h3> */}
        <div className='from-preview'>{email.from}</div>
        <div className='subject-preview'>{email.subject}</div>
        <div className="text-preview">{email.body}</div>



    </div>


}