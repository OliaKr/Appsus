
const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"
import { eventBusService } from "../../../services/event-bus.service.js"

export function MailDetails({emailId}) {

    const [email, setEmail] = useState({})

    useEffect(() => {
        getRelevantMail(emailId)

    },[])

    function getRelevantMail(emailId){
        mailService.get(emailId).then((email)=>{ console.log("mail is",email);setEmail(email) })
    
    }

    return (
        <div className="mail-details">
            <div className="mail-details-actions">
                <button onClick={() => eventBusService.emit("saveNote",email)}>Save as a note</button>
                <Link to={"/mail"}><button>Go Back</button></Link>
        

            </div>
                <div className={"mail-content"}>
                    <div class="mail-details-header">
                    <h3>Subject: {email.subject}</h3>
                    <h4>From: {email.from}</h4>
                    </div>
                    <div class="mail-details-body">
                        {email.body}
                    </div>
                </div>
    
        </div>
    )
    
  
  
  
  
}

