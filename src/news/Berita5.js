import React from 'react'
import Content from '../images/berita5.png'

const Berita5 = () => {
  return (
    <div className='container-berita'>
          <img src={Content} alt="news" width='100%' />
          <p className='judul-berita'>Mengembangkan Teknologi Baru untuk Pembelajaran Mendalam Berskala Besar yang Lebih Cepat</p>
          <p className='isi-berita'>
              Tim Ilmu Komputer baru-baru ini mengembangkan "LENA", sebuah teknologi penyesuaian kecepatan pembelajaran untuk pembelajaran mendalam berskala besar.
 LENA berhasil menyelesaikan pembelajaran model dengan waktu pembelajaran kurang dari setengah dibandingkan dengan teknologi yang ada dan juga tampaknya berhasil menyelesaikan pembelajaran model dalam situasi pembelajaran skala besar di mana teknologi sebelumnya gagal.
              <br />
              <br />
Pembelajaran mendalam adalah teknologi yang mempelajari data besar menggunakan model jaringan saraf yang terdiri dari banyak lapisan, yang dianggap sebagai teknologi inti untuk Revolusi Industri Keempat. Namun, pembelajaran mendalam membutuhkan banyak waktu dan sumber daya komputasi untuk pembelajaran data besar, yang telah ditunjukkan sebagai hambatan besar untuk penelitian dan pengembangan pembelajaran mendalam. Untuk mengatasi kelemahan ini, akademisi dan industri secara aktif melakukan penelitian tentang paralelisme data untuk mempercepat pembelajaran mendalam.
              <br />
              <br />
Dalam pembelajaran paralelisme data, berapa banyak hasil pembelajaran pekerja yang akan diterapkan pada suatu model disebut "laju pembelajaran", dan semakin tinggi laju pembelajaran, semakin banyak hasil pembelajaran yang tercermin dalam model.Umumnya seiring berjalannya pembelajaran, semakin besar skala pembelajaran (menunjukkan banyaknya data yang dipelajari secara bersamaan), maka kualitas hasil pembelajaran cenderung meningkat. Oleh karena itu, dalam hal ini, learning rate ditetapkan tinggi untuk mencerminkan kualitas hasil belajar yang baik dalam model tersebut.
              <br />
              <br />
Model pembelajaran mendalam terdiri dari banyak lapisan, masing-masing memiliki peran uniknya sendiri, berdasarkan pemahaman tentang perbedaan peran per lapisan, dan menegaskan bahwa status pembelajaran Anda berbeda secara signifikan per lapisan melalui analisis menyeluruh. Dengan analisis ini, di temukan bahwa teknik penyesuaian laju pembelajaran yang ada menerapkan laju pembelajaran yang sama untuk semua lapisan tanpa mempertimbangkan perbedaan status pembelajaran oleh setiap lapisan, yang menyebabkan penurunan akurasi model pada data. pembelajaran paralelisme.
              <br />
              <br />
Hasilnya, LENA dengan cepat mencapai akurasi model yang sama dengan hanya 45% waktu pembelajaran dari metode penyesuaian kecepatan pembelajaran sebelumnya dan mencapai akurasi model yang tinggi dalam situasi pembelajaran berskala besar di mana metode penyesuaian kecepatan pembelajaran sebelumnya gagal. Karena LENA dapat diterapkan tidak hanya untuk teknologi pembelajaran mendalam yang ada saat ini tetapi juga untuk teknologi masa depan, itu dievaluasi sebagai teknologi dengan potensi tinggi untuk digunakan di berbagai bidang bidang AI.
              <br />
              <br />
              출처 : 뉴스H(<a className='link-berita' href='http://www.newshyu.com' target='_blank'>http://www.newshyu.com</a>)
          </p>
    </div>
  )
}

export default Berita5
