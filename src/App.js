import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import News from './pages/News';
import Berita1 from './news/Berita1';
import Berita2 from './news/Berita2';
import Berita3 from './news/Berita3';
import Berita4 from './news/Berita4';
import Berita5 from './news/Berita5';
import About from './pages/About';
import Academic from './pages/Academic';
import Service from './pages/Service';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/academic" element={<Academic/>} />
      <Route exact path="/service" element={<Service/>} />
        <Route exact path="/news1" element={<News context={<Berita1/>} />} />
        <Route exact path="/news2" element={<News context={<Berita2/>} />} />
        <Route exact path="/news3" element={<News context={<Berita3/>} />} />
        <Route exact path="/news4" element={<News context={<Berita4/>} />} />
        <Route exact path="/news5" element={<News context={<Berita5/>} />} />
    </Routes>
  );
}

export default App;
