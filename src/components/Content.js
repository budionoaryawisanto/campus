import React from 'react'

const Content = (props) => {
  return (
    <a href={props.tujuan} className='content'>
          <img src={props.img} alt="content"/>
      <div className="detail-content">
        <p className='title-content'>{props.title}</p>
        <p className='text-content'>{props.text}</p>
          </div>
    </a>
  )
}

export default Content
