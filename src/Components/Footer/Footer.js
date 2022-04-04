import React from 'react'
import './Footer.css';
import Wave from "../../img/wave.png"
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>vannam34760@gmail.com</span>
        <ul className='f-link'>

        </ul>
      </div>
    </div>
  )
}

export default Footer