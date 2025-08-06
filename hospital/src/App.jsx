import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Team from './components/Team';
import DoctorPage from './components/DoctorPage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import './App.css'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/doctors/:doctorId" element={<DoctorPage />} />
        </Routes>
    </Router>
  );
}

export default App;
