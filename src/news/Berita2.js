import React from 'react'
import Content from '../images/berita2.png'

const Berita2 = () => {
  return (
    <div className='container-berita'>
          <img src={Content} alt="news" width='100%' />
          <p className='judul-berita'>Mengembangkan Teknologi Pembelajaran Model Deep Learning yang Efektif</p>
          <p className='isi-berita'>
              Tim peneliti dari lmu Komputer baru-baru ini mengembangkan algoritme untuk mempelajari model pembelajaran mendalam secara efisien. Teknologi ini, yang disebut "Gyro Dropout", meningkatkan algoritme dropout yang digunakan dalam pembelajaran model deep learning dan akurasi inferensi dengan memahami cara memperluas generalisasi model.
              <br />
              <br />
Algoritme dropout yang ada secara acak mempelajari subnetwork dari model pembelajaran mendalam untuk meningkatkan akurasi seluruh jaringan yang terdiri dari agregasinya. Dalam prosesnya, setiap subnetwork dipelajari hanya sekali. Tim peneliti Profesor Seo mengonfirmasi bahwa efisiensi pembelajaran dan kinerja generalisasi meningkat ketika jumlah subnetwork pembelajaran tunggal meningkat sementara jumlah subnetwork pembelajaran berkurang, dan merancang algoritme Gyro Dropout untuk pengoptimalan.
              <br />
              <br />
Tim peneliti secara eksperimental menemukan bahwa model visi komputer, seperti AlexNet dan ResNet, dan model pemrosesan bahasa alami, seperti BERT, meningkatkan kinerja dengan menerapkan algoritme Gyro Dropout. Selain itu, mereka merancang varian algoritme Gyro Dropout yang dapat secara efisien menghilangkan perhitungan neuron yang dikeluarkan dari graphics processing unit (GPU) pada aplikasi, yang menunjukkan bahwa hal itu dapat meningkatkan kecepatan pembelajaran model pembelajaran mendalam hingga 30%.
              <br />
              <br />
Tim mempresentasikan algoritme Gyro Dropout dan hasil penelitian terkait di MLSys, sebuah konferensi akademis yang sangat baik di bidang sistem pembelajaran mesin. Segera setelah pengumuman, perusahaan rintisan yang berbasis di Silicon Valley, MosaicML, menunjukkan minat pada hasil penelitian dan kolaborasi yang diusulkan. MosaicML menyediakan perangkat lunak sumber terbuka bernama Composer dan platform cloud yang dapat dengan mudah dan nyaman melakukan pembelajaran kecerdasan buatan (AI).
              <br />
              <br />
              출처 : 뉴스H(<a className='link-berita' href='http://www.newshyu.com' target='_blank'>http://www.newshyu.com</a>)
          </p>
    </div>
  )
}

export default Berita2
