import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link from react-router-dom
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Programmes from './sections/Programmes';
import Update from './sections/Update';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Join_us from './sections/Join_us';
import Event from './sections/Event';
import Donation from './sections/Donation';
import Faqs from './sections/Faqs';
import News_update from './sections/News_update';
import Thanks from './sections/Thanks';
import Programmes_profile from './sections/Programmes_profile';
import Programmes_profile6 from './sections/Programmes_profile6';
import Programmes_profile5 from './sections/Programmes_profile5';







const App = () => {
  return ( 
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/update" element={<Update />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join_us" element={<Join_us />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Donation" element={<Donation />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/News_update" element={<News_update />} />
          <Route path="/Thanks" element={<Thanks />} />
          <Route path="/Programmes_profile" element={<Programmes_profile />} />
          <Route path="/Programmes_profile6" element={<Programmes_profile6 />} />
          <Route path="/Programmes_profile5" element={<Programmes_profile5 />} />



        </Routes>
        {/* Use the Link component from react-router-dom to navigate */}
        <Link to="/about" className="nav-link nav-prop"></Link>
        <Link to="/programmes" className="nav-link nav-prop"></Link>
        <Link to="/update" className="nav-link nav-prop"></Link>
        <Link to="/contact" className="nav-link nav-prop"></Link>

      </Router>
    </div>
  );
};

export default App;
