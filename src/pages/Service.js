import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Hero from '../images/hero-service.png'

const Service = () => {
  return (
    <div className='body'>
          <Navbar service='underline'/>
          <Sidebar />
          <div className="container-hero">
              <img src={Hero} alt="hero" width='100%'/>
          </div>
          <div className="container-text">
               <div className="container-header-text">
                  <p className="title">Layanan NCIT</p>
                  <p className='subtitle'>Layanan Neo Culture Institute Of Technology</p>
              </div>
              <div className="container">
                  <p className='subtitle'>Mahasiswa NCIT</p>
                  <p className='text'>Merupakan layanan satu pintu, untuk memudahkan mahasiswa mengakses berbagai layanan aplikasi Online yang ada di Neo Culture Institute of Technology seperti Akses Internet, Daftar Ulang, Pendaftaran Beasiswa, Pendaftaran Kegiatan Mahasiswa, Melihat Nilai, Ujian Online, Form Kelengkapan Tugas Akhir, dan sebagainya.</p>
              </div>
              <div className="container">
                  <p className='subtitle'>Dosen dan Karyawan</p>
                  <p className='text'>Merupakan layanan satu pintu, untuk memudahkan Dosen dan Karyawan mengakses berbagai layanan aplikasi Online yang ada di Neo Culture Institute of Technology seperti Akses Internet, Pengisian Kinerja, Absensi, Input Nilai, dan sebagainya.</p>
              </div>
              <div className="container">
                  <p className='subtitle'>Aspirasi</p>
                  <p className='text'>Layanan penyampaian pertanyaan, aduan, saran, dan kritik tentang pelayanan di Neo Culture Institute of Technology melalui portal ASPIRASI</p>
              </div>
              <div className="container">
                  <p className='subtitle'>Jurnal Online</p>
                  <p className='text'>Journal Sistem ini merupakan sistem pengelolaan jurnal secara online di Neo Culture Institute of Technology. Jurnal yang terdaftar merupakan jurnal yang terbit di bawah naungan kelembagaan Neo Culture Institute of Technology.</p>
              </div>
              <div className="container">
                  <p className='subtitle'>Perpustakaan Digital</p>
                  <p className='text'>Perpustakaan Digital merupakan sistem pengelolaan buku secara online di Neo Culture Institute of Technology.  Sivitas Akademika dapat mengakses buku-buku yang tersedia untuk menunjang pembelajaran.</p>
              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Service
