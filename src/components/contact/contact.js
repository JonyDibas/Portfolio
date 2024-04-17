import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


import './contact.css';

function Contact() {

    return (
        <div id="contact">
            <h1 className="contactTitle">Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name' />
                <input type='text' className='email' placeholder='Your Email' />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <a className='link' href="https://wa.me/2223426742" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a className='link' href="https://www.linkedin.com/in/jonathan-di-bastiano/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Contact;