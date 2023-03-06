import { useNavigate } from 'react-router-dom'
import book from '../images/books.png'
import search from '../images/search.png'
import { useState } from 'react'

const Navbar = (props) => {
    const [toggleButton, setToggleButton] = useState(false);
     const toggleSwitch = () => {
         toggleButton ? setToggleButton(false) : setToggleButton(true);
         const Navigate = useNavigate()
  }
    return (
        <nav>
            <div className={`container-navitem ${toggleButton ? 'slide' : null}`}>
                <button onClick={() => Navigate("/")} className={`navitem ${props.home}`}>Beranda</button>
                <button onClick={() => Navigate("/about")} className={`navitem ${props.about}`}>Tentang NCIT</button>
                <button onClick={() => Navigate("/academic")} className={`navitem ${props.academic}`}>Akademik</button>
                <button onClick={() => Navigate("/service")} className={`navitem ${props.service}`}>Layanan</button>
            </div>
              <form action="/search" className='form-search'>
              <div className="search-box">
                  <input type="search" name="search" placeholder='What are you looking for ?' id="search" />
                  <img src={search} alt="search" width='30px' height="30px" className='search-button'/>
              </div>
      </form>
             <div className="menu-toggle" onClick={toggleSwitch}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </nav>
    )
}

export default Navbar