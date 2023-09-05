import React from 'react'

import './navbar.css';

const Navbar = () => {
  return (
    <nav className='Navbar'>
        
        <div className="navbar-left">
          <a className='text-logo' href="#home">Il<span>ham</span> Ams</a>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="menu"><a href="#about" className="menu-link">About</a></li>
            <li className="menu"><a href="#experience" className="menu-link">Experient</a></li>
            <li className="menu"><a href="#projects" className="menu-link">Projects</a></li>
            <li className="menu"><a href="#Contact" className="menu-link">Contact</a></li>
         </ul>
        </div>

    </nav>
  )
}

export default Navbar