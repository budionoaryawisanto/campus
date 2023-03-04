import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Education from './pages/Education';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/education" element={<Education/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
