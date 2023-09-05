import React from 'react';
import './about.css';
import profile from '../../assets/about-pic.png';
import experient from '../../assets/experience.png';
import education from '../../assets/education.png';
const About = () => {
  return (
    <div id='about' className='about-container'>
        <div className="text">
          <span className='text-small'> Get To Know More. </span>
          <h1 className='text-title'>About <span>Me</span></h1>
        </div>

        <div className='about-info'>
          <div className="sec-image">
              <img  src={profile} alt="" />
          </div>

          <div className="sec-info">
            <div className='sec-infomation'>
             
              <div className='experient'>
                <img src={experient} alt="" />
                <h3 className='title'>Experient</h3>
                <span className='text-small'>2+ years</span> <br />
                <span className='text-small'>Fronend Devolopment</span>
              </div>

              <div className='education'>
                <img src={education} alt="" />
                <h3 className='title'>Education</h3>
                <span className='text-small'>International language (ILA)</span> <br />
                <span className='text-small'>Fatoni University</span>
              </div>
              
            </div>

            <div className="text-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus debitis aut tenetur eaque beatae animi laboriosam maxime atque! Ipsa doloremque doloribus, temporibus sequi architecto totam aliquam commodi incidunt reiciendis distinctio facilis, assumenda aut eius alias earum nihil quibusdam libero veritatis molestias sit porro sunt iusto. Ex unde id autem?
            </div>
          </div>
        </div>
    </div>
  )
}

export default About