import React from 'react'
import Content from '../images/berita1.png'

const Berita1 = () => {
  return (
    <div className='container-berita'>
          <img src={Content} alt="news" width='100%' />
          <p className='judul-berita'>Teknologi Baru untuk Menerapkan Suhu di VR (Virtual Reality) Dikembangkan</p>
          <p className='isi-berita'>
              Tim Peneliti dari Teknik Informatika Neo Culture Institute Of Technology telah mengembangkan antarmuka pendinginan dan pemanasan yang terpasang di kulit yang mengimplementasikan suhu objek dalam realitas virtual (VR), melampaui getaran sederhana. Teknologi ini dapat diterapkan tidak hanya pada tangan tetapi juga pada area kulit yang luas, yang diharapkan memungkinkan pengalaman sensorik yang lebih jelas di VR dan metaverse.
              <br />
              <br />
Baru-baru ini, perkembangan teknologi sensorik buatan telah berkembang pesat dengan pesatnya pertumbuhan teknologi metaverse, seperti virtual reality (VR), augmented reality (AR), dan telehaptics. Haptic adalah teknologi sensorik buatan yang memungkinkan seseorang merasakan sentuhan, kekuatan, dan gerakan melalui perangkat input. Perangkat haptic yang sudah ada sebelumnya dikomersialkan dalam bentuk sarung tangan atau setelan seluruh tubuh. Namun, mereka tidak hanya terlalu besar atau berat, tetapi juga memiliki kendala perilaku karena sistem kabel dan resolusi spasial yang berkurang dari berbagai rangsangan untuk ditransmisikan ke kulit. Selain itu, belum ada penelitian yang dilakukan secara aktif pada sistem yang memberikan sensasi termal.
              <br />
              <br />
Sebagai alternatif, tim Profesor Jung mengembangkan VR epidermal yang dikontrol secara termal (t-eVR). T-eVR adalah antarmuka yang mengimplementasikan sensasi pendinginan dan pemanasan yang fleksibel dan melekat pada kulit melalui tambalan dingin berukuran halus dan pemanas Joule, perangkat listrik yang mengontrol suhu secara akurat dan cepat. Ini lebih tipis dan lebih ringan dari perangkat komersial konvensional dan dirancang untuk memungkinkan komunikasi dan dioperasikan secara nirkabel menggunakan Bluetooth, sehingga meminimalkan pembatasan perilaku.
              <br />
              <br />
Selain itu, mode pendinginan dan pemanasan diimplementasikan dengan cepat dan hemat daya. Dengan demikian, sensasi pendinginan dan pemanasan yang efektif dapat ditransmisikan ke kulit di area yang lebih luas melalui berbagai pola stimulasi, dan kontrol suhu yang akurat dimungkinkan. Perangkat t-eVR lebih ringan dan dapat didesain lebih leluasa dibandingkan perangkat haptic konvensional. Selain itu, banyak bidang, seperti kemampuan komunikasi nirkabel, antarmuka pengguna grafis, dan akses mudah ke Internet, telah dikembangkan lebih lanjut.
              <br />
              <br />
        Teknologi ini diharapkan akan sangat dimanfaatkan selain VR. Tim Profesor Jung berhasil dalam berbagai aplikasi, termasuk menyampaikan informasi suhu yang ditransmisikan dari perangkat t-eVR yang dikembangkan ke server cloud untuk mengirimkan pola stimulasi bahkan di lokasi yang berjarak 20 km atau mendeteksi distribusi suhu objek apa pun, dalam piksel, melalui inframerah seluler (IR) kamera dan mengirimkannya ke perangkat secara real time. Teknologi tersebut diharapkan dapat diterapkan dalam berbagai cara untuk hiburan, pendidikan, rehabilitasi, dan perawatan pasien jarak jauh di masa depan.
        <br />
        <br />
        출처 : 뉴스H(<a className='link-berita' href='http://www.newshyu.com' target='_blank'>http://www.newshyu.com</a>)
</p>
    </div>
  )
}

export default Berita1
