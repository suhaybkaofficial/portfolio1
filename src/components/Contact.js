import React,{useState} from 'react'
import emailjs from '@emailjs/browser';
import { Oval } from  'react-loader-spinner'
function Contact() {
    const [name,setName] = useState("");
    const [email,setEmail]= useState("");
    const [message,setMessage] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
    setIsLoading(true)
        emailjs.sendForm('service_qi9xxa2', 'template_szxmshk', e.target, 'pNmBtj4FrRBHTEl1X')
          .then((result) => {
              console.log(result.text);
              setIsLoading(false)
              setName("")
              setEmail("")
              setMessage("")
              setErrorMessage("Successfully Sent")
              setTimeout(() => {
                  setErrorMessage("")
              }, 3000);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div>
           <section className="resume-section" id="contact">
    <div className="resume-section-content">
        <h2 className="mb-5">Contact</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
            <form onSubmit={sendEmail}>
<div className="form-group">
  <label htmlFor="name">Fullname</label>
  <input required type="text" className="form-control" id="name" name="name" aria-describedby="name" placeholder="Enter Full name" 
        onChange={event => setName(event.target.value)}
        value={name} 
        />
</div>
<br />
<div className="form-group">
  <label htmlFor="email">Email address</label>
  <input required type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"
  onChange={event => setEmail(event.target.value)}
        value={email} 
   />
  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<br />
<div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea required className="form-control" id="message" name="message" rows="3" placeholder="Type Message"
    onChange={event => setMessage(event.target.value)}
        value={message} 
    >
    </textarea>
  </div>
<br />
{
    isLoading === true ?
    <>
    <Oval
    height = "40"
    width = "40"
    radius = "9"
    color = '#00407d'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />
    </>
    :
    <>
    
<button type="submit" className="btn btn-primary">Submit</button>
<br />

    </>
}
</form>
<br />
{
    errorMessage === "" ? 
    <>
    </>
    :
    <>
    <div className="alert alert-success pt-4">{errorMessage}</div>
    </>
}

            </div>
        </div>
        </div>
</section>
        </div>
    )
}

export default Contact
