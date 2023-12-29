import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Signin from './Pages/Signin';
import Signup from './pages/Signup';
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Sign-in" element={<Signin />} />
      <Route path="/Sign-up" element={<Signup />} />
    </Routes>

  </BrowserRouter>
}