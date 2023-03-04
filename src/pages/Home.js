import {useState} from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Footer from '../components/Footer'
import search from '../images/search.png'
import hero from '../images/placeholder.jpg'
import content1 from '../images/placeholder1.jpg'
import content2 from '../images/placeholder2.jpg'
import content3 from '../images/placeholder3.jpg'
import content4 from '../images/placeholder4.jpg'
import content5 from '../images/placeholder5.jpg'

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
      <div className="header-content">MORE FROM NCIT COMMUNITY</div>
      <div className="container-content">
        <Content img={content1} title='IN THE MEDIA' text='Popular Science interviewed Josh McDermott about his research on how music can impact a person’s mood. “There’s this big cultural shift in the way that we consume music and other audio that really happened over the last decade,” he says.' />
        <Content img={content2} title='RESEARCH NEWS' text='The DART mission, including postdoc Saverio Cambioni, smashed a spacecraft into the asteroid Dimorphos, showing for the first time that such an object can potentially be deflected away from Earth.' />
        <Content img={content3} title='NCIT IN THE WORLD' text='MIT composer Tod Machover’s piece “Overstory Overture” premieres at Lincoln Center on March 7, with superstar Joyce DiDonato in a leading — and surprising — role.'/>
        <Content img={content4} title='#THISISNCIT' text='Via @ncitpics on Instagram: “Afternoon sun streaming through NCIT’s lobby 7.”' />
        <Content img={content5} title='AROUND CAMPUS' text='Science Surfaces is a collection of accessories designed by high schoolers and inspired by MIT research. “Science and technology are the new frontiers of fashion,” says Jay Calderin, Boston Fashion Week founder and lead mentor for the initiative.' />
         <Content img={content1} title='IN THE MEDIA' text='Popular Science interviewed Josh McDermott about his research on how music can impact a person’s mood. “There’s this big cultural shift in the way that we consume music and other audio that really happened over the last decade,” he says.' />
      </div>
    <Footer/>
    </div>
  )
}

export default Home
