import React from 'react'
import Content from '../images/berita4.png'

const Berita4 = () => {
  return (
    <div className='container-berita'>
          <img src={Content} alt="news" width='100%' />
          <p className='judul-berita'>Akselerasi dalam Deep Learning dengan Teknik Baru yang Diusulkan</p>
          <p className='isi-berita'>
              Tim peneliti Ilmu Komputer, baru-baru ini mengembangkan teknik yang dioptimalkan untuk mempercepat pembelajaran sistem deep learning berskala besar seperti BERT dan GPT-3. Teknik ini mempercepat pembelajaran dengan meningkatkan tingkat pemanfaatan akselerator perangkat keras seperti kartu grafis (GPU) yang digunakan untuk melatih sistem pembelajaran mendalam. Melalui teknologi ini, tim Profesor Seo memungkinkan pembelajaran model skala besar dengan jumlah akselerator perangkat keras yang relatif kecil.
              <br />
              <br />
Studi ini diterbitkan dalam konferensi top dunia tentang sistem komputer, "Konferensi Eropa tentang Sistem Komputer," dan menarik perhatian dari akademisi dan industri karena tidak hanya dapat mempercepat pembelajaran pelatihan jaringan saraf berskala besar tetapi juga digunakan dalam berbagai cara di masa depan.
              <br />
              <br />
Metode pelatihan sistem pembelajaran mendalam yang ada tidak dapat menjadwalkan penggunaan akselerator perangkat keras secara efisien karena komputasi hanya dijadwalkan dalam urutan terbalik dari lapisan model pembelajaran mendalam saat menjalankan algoritme BackProp. Untuk mengatasi kekurangan tersebut, tim Profesor Seo menyusun "algoritme penjadwalan" yang menghitung algoritme BackProp untuk menganalisis ketergantungan komputasi algoritme BackProp dan mengoptimalkan ketersediaan perangkat keras.
              <br />
              <br />
Selama proses analisis, tim Profesor Seo menemukan bahwa dalam kasus Komputasi Gradien Berat, dimungkinkan untuk menjadwalkan dalam urutan yang berbeda tanpa menghitung lapisan sistem pembelajaran dalam dalam urutan terbalik, yang membuat tim peneliti mengembangkan "Out-Of -Order BackProp" teknik.
Out-Of-Order BackProp dapat diterapkan secara umum dan luas dalam melatih sistem pembelajaran mendalam, yang dapat diterapkan pada pembelajaran terdistribusi dari sistem pembelajaran mendalam berskala besar untuk membuat algoritme penjadwalan yang efisien.
              <br />
              <br />
Dengan teknik ini, tim profesor Seo berhasil menerapkan teknik penjadwalan yang meningkatkan prioritas perhitungan kemiringan parameter pada Jalur Kritis dalam Pelatihan Paralel Data dan Pelatihan Paralel Pipeline, metode pembelajaran terdistribusi yang representatif.
              <br />
              <br />
Hasilnya, algoritme penjadwalan tim peneliti meningkatkan kecepatan pembelajaran model visi komputer seperti DenseNet dan MobileNet hingga 1,5 kali lipat, serta meningkatkan kecepatan pembelajaran model pemrosesan bahasa alami yang besar seperti BERT dan GPT-3 hingga 2 waktu.
              <br />
              <br />
              출처 : 뉴스H(<a className='link-berita' href='http://www.newshyu.com' target='_blank'>http://www.newshyu.com</a>)
          </p>
    </div>
  )
}

export default Berita4
