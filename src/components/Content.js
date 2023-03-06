import React from 'react'
import { useNavigate } from 'react-router-dom'

const Content = (props) => {
  const Navigate = useNavigate()
  return (
    <div onClick={() => Navigate(props.tujuan)} className='content'>
          <img src={props.img} alt="content"/>
      <div className="detail-content">
        <p className='title-content'>{props.title}</p>
        <p className='text-content'>{props.text}</p>
          </div>
    </div>
  )
}

export default Content
