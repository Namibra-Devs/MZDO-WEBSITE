import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Programmes from './sections/Programmes';
import Update from './sections/Update';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
   
    <div>
    
<BrowserRouter>
      
      <Routes>
        <Route index element ={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/update" element={<Update />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;
