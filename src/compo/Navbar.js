import React from 'react'
import img from './images/img2.svg';
import './components.css';


export default function Navbar() {
  return (
    <>
    <nav className="navbar">
     <div className='nav-logo'>  <img className='page2-img logo-in-bar' src={img} alt=""  /> MATRIX-UI</div>
       <ul>
         <li className='inline'> <a href='#'  className="navItem">MEN</a></li>
         <li className='inline'> <a href='#'  className="navItem">WOMEN</a></li>
         <li className='inline'> <a href='#'  className="navItem">KIDS</a></li>
         <li className='inline'> <a href='#'  className="navItem">ELECTRONICS</a></li>
         <li className='inline'><input className='search' placeholder='Search'/></li>
       </ul>
       </nav>

<br />

    <nav className="navbar dark">
     <div className='nav-logo'> <img className='page2-img logo-in-bar' src={img} alt=""  />  MATRIX-UI</div>
       <ul>
         <li className='inline '> <a href='#'  className="navItem">MEN</a></li>
         <li className='inline'> <a href='#'  className="navItem">WOMEN</a></li>
         <li className='inline'> <a href='#'  className="navItem">KIDS</a></li>
         <li className='inline'> <a href='#'  className="navItem">ELECTRONICS</a></li>
         <li className='inline'><input className='search' placeholder='Search'/></li>
       </ul>
        </nav>

      


       <div className='carbon-box'>
       <iframe
  src="https://carbon.now.sh/embed/oAbOR377niRR2AcRj5IP"
  style={{width:"803px", height:"750px", border:"0", transform: "scale(1)", overflow:"hidden"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
</div>
    </>
  )
}

