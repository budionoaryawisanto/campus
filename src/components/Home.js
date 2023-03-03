import {useState} from 'react'
import search from '../images/search.png'
import Navbar from './Navbar'
import hero from '../images/placeholder.jpg'
import Content from './Content'
import content1 from '../images/placeholder1.jpg'

const Home = () => {
  var curentDate = new Date()
  return (
    <div className='body'>
      <Navbar/>
        <form action="/search" className='form-search'>
              <label htmlFor="search">Eksplorasi websites, orang dan lokasi</label>
              <div className="search-box">
                  <input type="search" name="search" placeholder='What are you looking for ?' id="search" />
                  <img src={search} alt="search" width='30px' height="30px" className='search-button'/>
              </div>
      </form>
      <div className="container-hero">
        <img src={hero} alt="hero" />
        <div className="detail-hero">
          <p>Anna Osherov, an assistant director at MIT.nano, helps researchers use state-of-the-art tools to probe materials’ nanoscale properties. She was attracted to materials science because of its breadth and interdisciplinary perspective — as she puts it, “Everything around us is material.”</p>
          <div className="action-hero">
            <h4>{curentDate.toLocaleDateString()}</h4>
          </div>
        </div>
      </div>
      <div className="title-content">MORE FROM NCIT COMMUNITY</div>
      <div className="container-content">
        <Content img={content1} />
        <Content img={content1} />
      </div>
    </div>
  )
}

export default Home
