import React from 'react'
import './projects.css'
import project1 from '../../assets/project-1.png'
import project2 from '../../assets/project-2.png'
import project3 from '../../assets/project-3.png'
const Projects = () => {
  return (
    <div id='projects' className='project-container'>
        
        <div className="text">
          <span className='text-small'> Browse My Reacent </span>
          <h1 className='text-title'>Pro<span>jec</span>ts</h1>
        </div>

        <div className="grid">
          {/* 1 */}
          <div className="project-items">
              <div className="sec-image">
                <img src={project1} alt="project1" />
              </div>
              <h3 className='title'>Project One</h3>
              <div className="btn-group">
                <button className="btn">Github</button>
                <button className="btn">Livr Demo</button>
              </div>
          </div>
          {/* 2 */}
          <div className="project-items">
          <div className="sec-image">
                <img src={project2} alt="project2" />
              </div>
              <h3 className='title'>Project Two</h3>
              <div className="btn-group">
                <button className="btn">Github</button>
                <button className="btn">Livr Demo</button>
              </div>
          </div>
          {/* 3 */}
          <div className="project-items">
          <div className="sec-image">
                <img src={project3} alt="project3" />
              </div>
              <h3 className='title'>Project Three</h3>
              <div className="btn-group">
                <button className="btn">Github</button>
                <button className="btn">Livr Demo</button>
              </div>
          </div>
        </div>
   
    </div>
  )
}

export default Projects