const { useState, useEffect } = React
import { mailService } from "../services/mail.service.js";

export const MailAdd = ({ closeComposeMail }) => {


  const [recepient, setRecepient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    switch (field){
        case "to": 
            setRecepient(value);
            break;
        case "subject": 
            setSubject(value);
            break;
        case "message":
            setMessage(value);
            break;
        default:
            console.log("field is odd",field);
    }
  };

  function clearData(){
    setMessage("");
    setRecepient("");
    setSubject("");
  }

  const onSendMail = (ev) => {
    ev.preventDefault();
    mailService.sendMail(recepient,subject,message);
    clearData();
    closeComposeMail();
  };

  return (
    <div className='compose-mail flex-column'>
      <div className='new-mail-header'>new message</div>
      <form onSubmit={onSendMail}>
        <div className='to-subject flex-column'>
          <input
            type='text'
            name='to'
            placeholder='To'
            value={recepient}
            onChange={handleChange} 
          />
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            value={subject}
            onChange={handleChange}
          />
          <textarea
            value={message}
            onChange={handleChange}
            name='message'
          ></textarea>
          <div className='send'>
            <button onClick={onSendMail}>Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};