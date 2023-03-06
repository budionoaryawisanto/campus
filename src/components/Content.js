import React from 'react'

const Content = (props) => {
  return (
    <button  onClick={() => Navigate(props.tujuan)} className='content'>
          <img src={props.img} alt="content"/>
      <div className="detail-content">
        <p className='title-content'>{props.title}</p>
        <p className='text-content'>{props.text}</p>
          </div>
    </button>
  )
}

export default Content