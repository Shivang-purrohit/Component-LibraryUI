import React from 'react'
import img from './images/img2.svg';
export default function MainPage() {
  return (
   
        <>
    <div className='container-center'>
        <img className='images' src={img} alt="" />
        <div className='container-h1'> 
           <h1>WELCOME TO MATRIX-UI</h1>
           <h2>Build minimalistic and beautiful UI using the Matrix UI library</h2>
        </div>
        <a href="/" className='btn'>GET STARTED</a>

      
    </div>
    </>
  )
}
