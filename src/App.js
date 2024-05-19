import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Pals from './pages/Guide';

import 'bootstrap/dist/css/bootstrap.min.css'; /* boostrap for carousel */
import './styles/App.css'; 
import './styles/Home.css'; 

export default function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Pals />} />
      </Routes>
    </div>
  );
}