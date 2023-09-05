import React from 'react'
import check from '../../assets/checkmark.png'
import './experient.css'

const Experient = () => {
  return (
    <div id='experience' className='experient-container'>
        <div className="text">
          <span className='text-small'> Explore My </span>
          <h1 className='text-title'>Ex<span>peri</span>ence</h1>
        </div>

        <div className="experient">
          <div className="experient-left">
            <h2 className='title'> Fronend Development </h2>
               <div className='grid-frontend'>
               <div className='fronend'>
                  <img src={check} alt="checlmark" />
                  <div className='item'>
                    <h3 className='text-front'>HTML</h3>
                    <span className='text-small-front'> Experienced </span>
                  </div>
               </div>

            
               <div className='fronend'>
                  <img src={check} alt="checlmark" />
                  <div className='item'>
                    <h3 className='text-front'>CSS</h3>
                    <span className='text-small-front'> Experienced </span>
                  </div>
               </div>

               <div className='fronend'>
                  <img src={check} alt="checlmark" />
                  <div className='item'>
                    <h3 className='text-front'>SASS</h3>
                    <span className='text-small-front'> intermediate </span>
                  </div>
               </div>

               <div className='fronend'>
                  <img src={check} alt="checlmark" />
                  <div className='item'>
                    <h3 className='text-front'>JavaScript</h3>
                    <span className='text-small-front'> Basic </span>
                  </div>
               </div>

               <div className='fronend'>
                  <img src={check} alt="checlmark" />
                  <div className='item'>
                    <h3 className='text-front'>React js</h3>
                    <span className='text-small-front'> Basic </span>
                  </div>
               </div>
            
               <div className='fronend'>
                  <img src={check} alt="checlmark" />
                  <div className='item'>
                    <h3 className='text-front'>Material UI</h3>
                    <span className='text-small-front'> intermediate </span>
                  </div>
               </div>
               </div>
         </div>
          
        <div className="experient-right">
          <h2 className='title'> Backend Development </h2>
          <div className="grid">
          <div className='grid-backend'>
               <div className='fronend'>
                  <img src={check} alt="checlmark" />
                  <div className='item'>
                    <h3 className='text-front'>PostgreSQL</h3>
                    <span className='text-small-front'> Basic </span>
                  </div>
               </div>

               <div className='fronend'>
                  <img src={check} alt="checlmark" />
                  <div className='item'>
                    <h3 className='text-front'>Node JS</h3>
                    <span className='text-small-front'> intermediate </span>
                  </div>
               </div>



               <div className='fronend'>
                  <img src={check} alt="checlmark" />
                  <div className='item'>
                    <h3 className='text-front'>Express JS</h3>
                    <span className='text-small-front'> intermediate </span>
                  </div>
               </div>

               <div className='fronend'>
                  <img src={check} alt="checlmark" />
                  <div className='item'>
                    <h3 className='text-front'>Git</h3>
                    <span className='text-small-front'> intermediate </span>
                  </div>
               </div>
               </div>
               </div>
          </div>
        </div>
    </div>
  )
}

export default Experient