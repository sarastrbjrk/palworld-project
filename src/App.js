import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Pals from './pages/Pals';

import 'bootstrap/dist/css/bootstrap.min.css'; /* boostrap for carousel */
import './styles/App.css'; 
import './styles/Pals.css'; 
import './styles/Home.css'; 

export default function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pals" element={<Pals />} />
      </Routes>
    </div>
  );
}