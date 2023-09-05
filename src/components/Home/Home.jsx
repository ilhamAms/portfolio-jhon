import React from 'react'
import './home.css'

import profile1 from '../../assets/profile-pic.png';
import linkin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
const Home = () => {
  return (
    <div id='#Home' className='home-container'>
      

      <div className="home-left">
        <div className="pic-container">
        <img src={profile1} alt="Ilham Ams" />
        </div>
      </div>
      <div className="home-right">
        <div className="text-group">
          <span className='text-small'> Hello i'm </span>
          <h1 className='text-title'>Il<span>ham</span> Ams</h1>
          <h3 className='text-subtitle'>Fronend Devoloper</h3>
        </div>
        <div className='btn-group'>
          <button className='cv'>Dowload CV</button>
          <button className='co'> Contact Us </button>
        </div>
        <div className='group-icon'>
          <img className='icon' src={linkin} alt="linkin" />
          <img className='icon' src={github} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Home