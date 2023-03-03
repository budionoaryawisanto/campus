import { useNavigate } from 'react-router-dom'
import book from '../images/books.png'
import search from '../images/search.png'
import { useState } from 'react'

const Navbar = () => {
    const [toggleButton, setToggleButton] = useState(false);
     const toggleSwitch = () => {
    toggleButton ? setToggleButton(false) : setToggleButton(true);
  }
    return (
        <nav>
            <div className="container-logo">
                <img src={book} alt="logo" />
                <p>Neo Culture Institute of Technology</p>
            </div>
            <div className={`container-navitem ${toggleButton ? 'slide' : null}`}>
                <a href='' className="navitem">Education</a>
                <a href='' className="navitem">Research</a>
                <a href='' className="navitem">Innovation</a>
                <a href='' className="navitem">Admissions + Aid</a>
                <a href='' className="navitem">Campus Life</a>
                <a href='' className="navitem">News</a>
                <a href='' className="navitem">Alumni</a>
                <a href='' className="navitem">About NCIT</a>
            </div>
            <div className="container-search">
                <img src={search} alt="search" width='40px' height='40px' />
            </div>
             <div className="menu-toggle" onClick={toggleSwitch}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </nav>
    )
}

export default Navbar