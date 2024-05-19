import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pals from './pages/Guide';

export default function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Pals />} />
      </Routes>
      <Footer />
    </div>
  );
}