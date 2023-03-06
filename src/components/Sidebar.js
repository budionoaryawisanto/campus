import React from 'react'
import logo from '../images/Neo Culture Institute of Technology 1.png'

const Sidebar = () => {
  return (
    <div className='container-sidebar'>
          <div className="container-logo">
              <img src={logo} alt="neo culture logo" />
          </div>
          <div className="sidebar-title">
              <p>Neo Culture Institute of Technology</p>
          </div>
    </div>
  )
}

export default Sidebar
