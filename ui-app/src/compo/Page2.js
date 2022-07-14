import React from 'react'
import './Page2.css'
import img from './images/img2.svg'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Cards from './Cards'
import Buttons from './Buttons'
import Floating from './Floating'
import Alerts from './Alerts'
import Badge from './Badge'
import Avatar from './Avatar'


export default function Page2() {
  return (
 <>
 
    <div className='wrapper'>
      <div className="sidebar">
     
      <h2> <span> <img className='page2-img' src={img} alt="" /></span> MATRIX-UI </h2>
            <ul className='ul1'>
            
    
           
            
                <li  className='list' ><Link to="/" smooth={true} duration={1000}  className='links'></Link><i class="fa-solid fa-bars"></i> NavBar </li>
                <li  className='list' ><Link to="/"  className='links'></Link><i class="fa-solid fa-square-full"></i> Cards </li>
                <li  className='list' ><Link to="/"  className='links'></Link><i class="fa-solid fa-stop"></i> Buttons </li>
                <li  className='list' ><Link to="/"  className='links'></Link> <i class="fa-solid fa-circle-dot"></i> Floating Buttons</li>
                <li  className='list' ><Link to="/"  className='links'></Link> <i class="fa-solid fa-triangle-exclamation"></i> Alerts </li>
                <li  className='list' ><Link to="/"  className='links'></Link> <i class="fa-solid fa-id-badge"></i>  Badge on Card</li>
                <li  className='list' ><Link to="/"  className='links'></Link><i class="fa-solid fa-user-tie"></i> Avatar</li>
            </ul>

             
            </div>
      </div>


            <div className="main-content">
            <h1>INSTALLATION</h1>
            <p className='para'>copy this code in the head tag of your HTML document and you are good to go:</p>
            
            
      
            <br />
           <br />
           <br />
           <br />
            <hr></hr>

             <br></br>
            <div  id='NavBar'>
              <h1>NavBar</h1>
              <br />
              <Navbar/>
              <br />
              <br />
              
              <br />
              <br />
              <br />
              <br />

              
            </div>
            <hr />
            <br />
            
            <h1>Cards</h1>
            <p className='para'>copy this code in the head tag of your HTML document and you are good to go:</p>
            <Cards/>
            <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

            <hr></hr>

             <br></br>


             <h1>Buttons</h1>
           
            <p className='para'>Non deleniti dolorum blanditiis laudantium distinctio suscipit voluptatibus doloremque ipsum doloribus eos. Voluptates, saepe quaerat! Beatae deleniti perspiciatis veniam quis facere dolore, velit .</p>
           <br />
           <Buttons/>
           <br />
           <br />
           
            <hr></hr>

             <br></br>

             <h1>Floating Button</h1>
            
            <p className='para'>untur optio cupiditate Soluta inventore maxime est. Quam ad minus veritatis iusto earum doloremque asperiores nesciunt reiciendis consequuntur explicabo, fuga nostrum quae tempora accusamus totam? Perferendis corporis aperiam molestiae ratione autem inventore voluptatem, dolorum reprehenderit ea sed culpa cumque, voluptates porro esse placeat amet excepturi! Molestiae libero, dolore enim repudiandae neque obcaecati quam eos illo autem, assumenda delectus. Non deleniti dolorum blanditiis laudantium distinctio suscipit voluptatibus doloremque ipsum doloribus eos. Voluptates, saepe quaerat! Beatae deleniti perspiciatis veniam quis facere dolore, velit .</p>
            <br />
              <br />
              <Floating/>
            
            
              <br />
              <br />
            

            <hr></hr>

             <br></br>

             <h1>Alerts</h1>
           
            <p className='para'> saepe quaerat! Beatae deleniti perspiciatis veniam quis facere dolore, velit .</p>
              <br />
              <br />
              <br />

              <Alerts/>
              <br />
              <br />
              <br />
            <hr></hr>

             <br/>



              
             <h1>Badge on cards</h1>
            
            <p className='para'>Lorem ur, laudantium distinctio suscipit voluptatibus doloremque ipsum doloribus eos. Voluptates, saepe quaerat! Beatae deleniti perspiciatis veniam quis facere dolore, velit .</p>
           <br />
           <br />
           <br />
           <Badge/>
           <br />
           <br />
           <br />
            <hr></hr>

             <br></br>
           
           
             <h1>Avatar</h1>
          
            <p className='para'>   um blanditiis laudantium distinctio suscipit voluptatibus doloremque ipsum doloribus eos. Voluptates, saepe quaerat! Beatae deleniti perspiciatis veniam quis facere dolore, velit .</p>
           
           <br />
           <br />
           <br />

           <Avatar/>

           <br />
           <br />
           <br />
           
            <hr></hr>

             <br></br>
           
            
           
           
           
           
            </div>

            
           
  </>
  )
}





