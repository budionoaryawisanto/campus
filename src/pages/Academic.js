import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Hero from '../images/hero_academic.png'

const Academic = () => {
  return (
    <div className='body'>
          <Navbar academic='underline'/>
          <Sidebar />
          <div className="container-hero">
              <img src={Hero} alt="hero" width='100%' />
          </div>
          <div className="container-text">
              <div className="container-header-text">
                  <p className="title">Akademik NCIT</p>
                  <p className='subtitle'>Akademik Neo Culture Institute Of Technology</p>
              </div>
              <p className='text'>Pada saat ini kebutuhan akan teknologi informasi memegang peranan yang sangat penting dan dimasa yang akan datang yang akan menjadi tulang punggung pertumbuhan ekonomi bangsa. Untuk itu dibangunlah beberapa program studi di Neo Culture Institute Of Technology yaitu program studi Ilmu Komputer, Teknik Informatika, Sistem Informasi, dan  Teknologi Game</p>
              <div className="container">
                  <p className='subtitle'>ilmu komputer</p>
                  <p className='text'>Program Studi Ilmu Komputer dibekali dengam  kemampuan untuk membuat dan memperbaiki perangkat lunak sistem, melakukan dan mengawasi kegiatan instalasi dan pelayanan peralatan yang terkait dengan jaringan, membuat rancangan, mengimplementasikan, dan memonitor basis data dalam suatu organisasi, serta menerapkan prinsip-prinsip rekayasa perangkat lunak dalam mendesain, mengembangkan, menguji dan mengevaluasi perangkat lunak.</p>
              </div>
              <div className="container">
                  <p className='subtitle'>Teknik Informatika</p>
                  <p className='text'>Program Studi  Teknik Informatika dibekali dengan kemampuan dan keahlian teknis, agar memiliki kompetensi di bidang pemrograman komputer, pembangunan sistem informasi dan teknologi basis data, pengembangan rekayasa perangkat lunak baik pada perangkat desktop, web maupun mobile, serta jaringan komputer. Selain kemampuan teknis, Lulusan Program  Teknik Informatika juga dibekali dengan kemampuan non teknis(soft skill), berupa pengetahuan dan wawasan kehidupan sosial dan beragama, mendukung gerakan anti-korupsi, kepemimpinan,etika dan ketrampilan komunikasi dalam membina kerjasama yang baik sesuai kebutuhan lapangan kerja, sehingga menjadi lulusan yang memiliki kualitas dan integritas intelektual dengan karakter Jujur, Orisinil, Semangat, dan Santun..</p>
              </div>
              <div className="container">
                  <p className='subtitle'>Sistem Informasi</p>
                  <p className='text'>Program Studi Sistem Informasi adalah bidang keilmuan yang menggabungkan ilmu komputer dengan bisnis dan manajemen. Di prodi ini akan belajar gimana mengidentifikasi kebutuhan dan proses bisnis perusahaan berdasarkan data-data yang dimiliki perusahan, kemudian merancang sistem yang sesuai dengan kebutuhan perusahaan. Selain belajar teknik pemrograman, juga dituntut untuk mempelajari proses bisnis yang ada di perusahaan. Lulusan Prodi Sistem Informasi diharapkan dapat mengembangkan sebuah sistem pengolahan data dari berbagai sumber untuk dapat disajikan sebagai informasi yang bermanfaat bagi perusahaan.</p>
              </div>
              <div className="container">
                  <p className='subtitle'>Teknologi Game</p>
                  <p className='text'>Program Studi Teknologi Game akan dibekali dengan empat kemampuan dasar yang dapat mendukung tumbuh kembang industri game yaitu kemampuan teknis, kemampuan desain, kemampuan social dan komunikasi, dan kemampuan bisnis untuk berwirausaha di bidang industri game. Program studi ini akan membentuk mahasiswa yang berkemampuan teknis meliputi merancang dan membuat game, menguasai pemrograman komputer khususnya yang berhubungan dengan game, kemampuan grafik dan audio. Penguasaan library dan tools dengan konsep yang kuat bisa menghasilkan kemampuan untuk membuat game platform dan game engine yang banyak dibutuhkan untuk memasukkan konten-konten lokal. Prodi Teknologi Game ini bergerak dalam mengembangkan industri kreatif.</p>
              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Academic
