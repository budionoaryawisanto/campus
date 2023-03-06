import React from 'react'
import twitter from '../images/twitter.png'

const Footer = () => {
  return (
    <div className='footer'>
          <p className='title-footer'>Neo Culture Institute of Technology</p>
      <a href='https://twitter.com/berrycoree/status/1251898891513090055' target='_blank' className='links-footer'>
        <img src={twitter} alt="twitter" height='20px' />
        <p>NCIT_</p>
      </a>
      <a href='https://gmail.com' target='_blank' className='links-footer'>
        <div className='footer-icons'>@</div>
        <p>NCIT@gmail.com</p>
      </a>
      <div className='copyright'>
        <p>© 2023 Pemrograman Web</p>
        <p>Kelompok 5</p>
      </div>
    </div>
  )
}

export default Footer
