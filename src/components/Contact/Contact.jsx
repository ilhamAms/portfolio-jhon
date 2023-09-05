import React from 'react'
import './contact.css'
import email from '../../assets/email.png'
import linkin from '../../assets/linkedin.png'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className="text">
          <span className='text-small'> Get in Touch </span>
          <h1 className='text-title'>Con<span>tact</span> ME</h1>
        </div>

        <div className="contact-group">
          <div className='input'>
            <img src={email} alt="" />
            <input type="" placeholder='Example@gmail.com' />
          </div>
          <div className="link-in">'
            <img src={linkin} alt="" />
            <span>Lunkedin</span>
          </div>
        </div>

        <div className='footer'>
          <ul >
            <li><a href="#about" className="items-link">About</a></li>
            <li><a href="#experience" className="items-link">Experience</a></li>
            <li><a href="#projects" className="items-link">Project</a></li>
            <li><a href="#Contact" className="items-link">Contant</a></li>
          </ul>

          <div className="copy-right">
            <p>Ilham Ams 2542-1999 copyright</p>
          </div>

        </div>

    </div>
  )
}

export default Contact