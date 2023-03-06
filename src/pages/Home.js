import {useState} from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import search from '../images/search.png'
import hero from '../images/placeholder.jpg'
import content1 from '../images/berita1.png'
import content2 from '../images/berita2.png'
import content3 from '../images/berita3.png'
import content4 from '../images/berita4.png'
import content5 from '../images/berita5.png'
import video from '../videos/video1.mp4'

const Home = () => {
  return (
    <div className='body'>
      <Navbar home='underline' />
      <Sidebar />
      <div className="container-video">
        <video src={video} controls muted  loop='true' autoPlay='autoplay'></video>
      </div>
      <div className="header-content">BERITA NCIT</div>
      <div className="container-content">
        <Content tujuan='/news1' img={content1} title='Teknologi Baru untuk Menerapkan Suhu di VR (Virtual Reality) Dikembangkan' />
        <Content tujuan='/news2' img={content2} title='Mengembangkan Teknologi Pembelajaran Model Deep Learning yang Efektif' />
        <Content tujuan='/news3' img={content3} title='Teknologi Pengoptimalan DB Berbasis AI Baru Dikembangkan'/>
        <Content tujuan='/news4' img={content4} title='Teknologi Pengoptimalan DB Berbasis AI Baru Dikembangkan'/>
        <Content tujuan='/news5' img={content5} title='Mengembangkan Teknologi Baru untuk Pembelajaran Mendalam Berskala Besar yang Lebih Cepat'/>
      </div>
    <Footer/>
    </div>
  )
}

export default Home
