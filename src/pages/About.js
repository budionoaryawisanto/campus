import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Hero from '../images/Profil NCIT.png'

const About = () => {
  return (
    <div className='body'>
          <Navbar about='underline'/>
          <Sidebar />
          <div className="container-hero">
          <img src={Hero} alt="hero" width='100%'/>
              <div className="container-title-hero">
                  <p className='title-hero'>Profil NCIT</p>
                  <p className='subtitle-hero'>Neo Culture Institute Technology (NCIT)</p>
              </div>
          </div>
          <div className="container-text-about">
              <div className="title-text-about">Sekilas NCIT</div>
              <p>Neo Culture Institute Of Technology (NCIT) merupakan salah satu institusi pendidikan berjenang S1 (Sarjana) yang berkomitmen menyelenggarakan pendidikan berkualitas tinggi. Pendirian NCIT diharapkan mampu memberikan inovasi yang mendukung perkembangan bangsa dan negara.
                  <br />
                  <br />
                NCIT mengkhususkan kurikulumnya pada inovasi dan teknologi. Selain itu, keberadaan SM Entertaiment dan afiliasinya memberikan dukungan praktek bisnis di dalam NCIT dengan beberapa aspek bidang diantaranya Tata Kelola Perusahaan yang baik, Pengembangan Teknologi Informasi, Teknologi Komputer, Logistik dan Distribusi.
              </p>
              <div className="title-text-about">Visi NCIT</div>
              <p>Menjadi institusi pendidikan tinggi unggul yang inovatif, berkualitas tinggi, dan berdaya-saing internasional serta didukung praktik-praktik terbaik industri</p>
              <div className="title-text-about">Misi NCIT</div>
              <p>1. Menyelenggarakan pendidikan tinggi (pengajaran, penelitian, dan pengabdian kepada masyarakat) yang inovatif, berkualitas tinggi dan berdaya saing internasional serta relevan dengan kebutuhan masyarakat, bisnis dan industri.
                  <br />
                  2. Membentuk civitas akademika yang amanah, beretika, dan berorientasi pada kemajuan, serta menjunjung tinggi budaya berbagi pengetahuan.
                  <br />
3. Menghasilkan lulusan yang berbudi luhur, berwawasan internasional, menjunjung kearifan lokal, profesional dan berdaya saing tinggi serta berjiwa kewirausahaan.</p>
          </div>
            <Footer/>
    </div>
  )
}

export default About
