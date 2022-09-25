import React, {useState, useRef } from 'react'
import { Button } from '@mui/material'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const form = useRef();

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name,email,message);

    emailjs.sendForm('service_itgyqkn', 'template_t4ydlkz', form.current, 'YAHhO_UH0RqzcCI-l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setName('');
    setEmail('');
    setMessage('');  
  }

  return (
    <div className="flex align-center justify-center container mt-5">
      <form onSubmit={onSubmit} ref={form} className='flex flex-col align-center justify-center w-1/2 border-2 p-5 rounded-lg'>
        <div className="flex flex-col mb-3">
          <label className="form-label text-white" style={{fontFamily:'Cedarville Cursive'}}>
            Name
          </label>
          <input className="form-control rounded-md bg-white opacity-25" 
            value={name} 
            onChange={handleNameChange}
            type="text" 
            id="name" required 
            placeholder='  Rakesh Sharma'
            name = 'from_name'
            />
        </div>

        <div className="flex flex-col mb-3">
          <label className="form-label text-white" htmlFor="email" style={{fontFamily:'Cedarville Cursive'}}>
            Email
          </label>
          <input className="form-control rounded-md bg-white opacity-25" 
            value={email} 
            onChange={handleEmailChange}
            type="email" 
            id="email" 
            required 
            placeholder='  rakeshS@gmail.com'
            name = 'from_email'
          />
        </div>

        <div className=" flex flex-col mb-3">
          <label className="form-label text-white" htmlFor="message" style={{fontFamily:'Cedarville Cursive'}}>
            Message
          </label>
          <textarea className="form-control rounded-md bg-white opacity-25" 
            value={message} 
            onChange={handleMessageChange}
            id="message" 
            required 
            placeholder='  type here...'
            name='message'
            />
        </div>

        <Button variant="contained" type="submit" style={{marginTop:'10px',background:'#86377b',width:'auto'}}>
          {formStatus}
        </Button>
      </form>
    </div>
  )
}
export default Contact;