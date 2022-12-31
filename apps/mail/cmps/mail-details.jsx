
const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"

export function MailDetails({emailId}) {

    const [email, setEmail] = useState({})

    useEffect(() => {
        getRelevantMail(emailId)

    },[])

    function getRelevantMail(emailId){
        mailService.get(emailId).then((email)=>{ console.log("mail is",email);setEmail(email) })
    
    }

    return <div className="mail-details">

        { email &&  <div>
        <h3>Subject : {email.subject}</h3> 
        <h4>From: {email.from}</h4>
            <p> {email.body} </p> 
        </div>}

    </div>
}

