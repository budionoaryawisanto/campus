import React from 'react'
import Content from '../images/berita3.png'

const Berita3 = () => {
  return (
    <div className='container-berita'>
          <img src={Content} alt="news" width='100%' />
          <p className='judul-berita'>Teknologi Pengoptimalan DB Berbasis AI Baru Dikembangkan</p>
          <p className='isi-berita'>
              Universitas Neo Culture Institute Of Technology mengumumkan bahwa tim Teknologi Game telah mengembangkan teknologi pengoptimalan basis data berdasarkan AI. Dalam penelitian ini, tim Profesor Jung mengembangkan teknologi untuk mengurangi kesalahan hingga 40% dan menggandakan kecepatan pembelajaran dengan model prediksi baru (Dream), algoritma pembuatan data (TEDDY, SODDY), dan metode pembelajaran yang dikemas.
              <br />
              <br />
Untuk mengoperasikan database secara efisien, optimasi Query sangat penting. Tim mengembangkan algoritme prediksi kinerja kueri yang penting untuk pengoptimalan kueri dengan menggunakan model pembelajaran mendalam.
              <br />
              <br />
Meskipun telah ada penelitian untuk memprediksi volume kinerja kueri dengan pembelajaran mendalam, sulit untuk menggunakannya dalam basis data aktual karena waktu dan biaya tinggi yang diperlukan untuk pembelajaran model pembelajaran mendalam.
              <br />
              <br />
Untuk mengatasi masalah ini, tim mengembangkan algoritme (TEDDY, SODY) yang menghasilkan data pembelajaran lebih dari 13 kali lebih cepat dari sebelumnya. Jika seseorang menggunakan ini, seseorang dapat memperoleh data pembelajaran berkualitas tinggi dalam waktu singkat. Selain itu, waktu belajar berkurang drastis melalui Pembelajaran Berkemas yang diusulkan oleh tim Profesor Jung. Bahkan jika model pembelajaran mendalam dengan struktur yang sama digunakan, kesalahan dapat dikurangi hingga 20% dan waktu pembelajaran dapat dikurangi hingga lebih dari 50%.
              <br />
              <br />
Profesor berkata, "Studi ini bermakna karena pembuatan data dan waktu pembelajaran model berkurang secara drastis, yang menghabiskan sebagian besar waktu dalam pengoptimalan basis data berbasis pembelajaran mendalam."
              <br />
              <br />
              출처 : 뉴스H(<a className='link-berita' href='http://www.newshyu.com' target='_blank'>http://www.newshyu.com</a>)
          </p>
    </div>
  )
}

export default Berita3
