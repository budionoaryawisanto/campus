import {useState} from 'react'
import search from '../images/search.png'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='body'>
      <Navbar/>
        <form action="/search" className='form-search'>
              <label htmlFor="search">Eksplorasi websites, orang dan lokasi</label>
              <div className="search-box">
                  <img src={search} alt="search" width='30px' height="30px" className='search-button'/>
                  <input type="search" name="search" placeholder='Search here...' id="search" />
              </div>
      </form>
    </div>
  )
}

export default Home
