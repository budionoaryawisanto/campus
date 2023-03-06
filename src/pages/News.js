import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Berita1 from '../news/Berita1'

const News = (props) => {
  return (
    <div className='body'>
          <Navbar />
          <Sidebar />
      {props.context}
          <Footer/>
    </div>
  )
}

export default News
