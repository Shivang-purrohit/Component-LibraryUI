import React from 'react'
import img from './images/img2.svg';
import './components.css';


export default function Navbar() {
  return (
    <>
    <nav className="navbar">
     <div className='nav-logo'>MATRIX-UI</div>
       <ul>
         <li className='inline'> <a href='/'  className="navItem">MEN</a></li>
         <li className='inline'> <a href='/'  className="navItem">WOMEN</a></li>
         <li className='inline'> <a href='/'  className="navItem">KIDS</a></li>
         <li className='inline'> <a href='/'  className="navItem">ELECTRONICS</a></li>
         <li className='inline'><input className='search' placeholder='Search'/></li>
       </ul>
       
     
 
 
    </nav>

<br />

    <nav className="navbar dark">
     <div className='nav-logo'>MATRIX-UI</div>
       <ul>
         <li className='inline '> <a href='/'  className="navItem dark">MEN</a></li>
         <li className='inline'> <a href='/'  className="navItem dark">WOMEN</a></li>
         <li className='inline'> <a href='/'  className="navItem dark">KIDS</a></li>
         <li className='inline'> <a href='/'  className="navItem dark">ELECTRONICS</a></li>
         <li className='inline'><input className='search' placeholder='Search'/></li>
       </ul>
       
     
 
 
    </nav>
     
    </>
  )
}
