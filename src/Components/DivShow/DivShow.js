import React from 'react'
import './index.css'
const DivShow = ({img, text1, text2}) => {
  return (
    <div className='divShow'>
        <img src={img} alt="" />
        <span>
            <p>{text1}</p>
           
            <p>{text2}</p>
        </span>
    </div>
  )
}

export default DivShow;