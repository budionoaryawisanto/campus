import React from 'react'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import youtube from '../images/youtube.png'
import instagram from '../images/instagram.png'

const Footer = () => {
  return (
    <div className='footer'>
          <p className='title-footer'>Neo Culture Institute of Technology</p>
          <a href="http://googlemaps.com" className='location-footer'>77 Neo Culture Avenue, Cambridge, MA, USA</a>
          <div className="links-footer">
              <a href='http://facebook.com' target='_blank'><img src={facebook} alt="facebook" height='23px'/></a>
              <a href="http://youtube.com" target='_blank'><img src={youtube} alt="youtube" height='23px'/></a>
              <a href="http://instagram.com" target='_blank'><img src={instagram} alt="instagram" height='19px'/></a>
              <a href='http://twitter.com' target='_blank'><img src={twitter} alt="twitter" height='23px'/></a>
          </div>
    </div>
  )
}

export default Footer
