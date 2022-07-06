import React from 'react'
import img from './images/img2.svg';
const navbar = () => {
  return (
   <>
   
    <div className='container'>
      <navbar className='top'>
     <div> <p>MATRIX-UI</p></div> 
     <img className='image-logo' src={img} alt="" />
      
      <div className='right'>
      <a href="https://github.com/Shivang-purrohit">
      <i className='fa-brands fa-github '></i>
      </a>
       </div>
      </navbar>


    </div>

   </>
  )
}

export default navbar
