import React from 'react'
import './index.css'
const Experiences = () => {
    /* const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; */
    const darkMode=null;
  return (
    <div className="experience" id='experience'>
    <div className="achievement">
      {/* darkMode */}
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>0+</div>
      <span  style={{color: darkMode?'white':''}}>years </span>
      <span>Experience</span>
    </div>
    <div className="achievement">
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>15+</div>
      <span  style={{color: darkMode?'white':''}}>completed </span>
      <span>Projects</span>
    </div>
    <div className="achievement">
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
      <span  style={{color: darkMode?'white':''}}>companies </span>
      <span>Work</span>
    </div>
  </div>
  )
}

export default Experiences