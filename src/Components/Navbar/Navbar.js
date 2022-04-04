import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
   <div className="n-wrapper">
       <div className="n-left">
           <div className="n-name">Fierence</div>
           <span>toggle</span>
       </div>
       <div className="n-right">
           <ul className="n-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Testimonial</a></li>
           </ul>
           <button className="button">
               Contact 
           </button>
       </div>
   </div>
  )
}

export default Navbar