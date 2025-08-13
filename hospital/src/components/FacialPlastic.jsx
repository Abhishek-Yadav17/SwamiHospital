import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/FacialPlastic.scss';

const FacialPlastic = () => {
  return (
    <>
      <Navbar />
      <main>
        <motion.div
          className="facial-plastic"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="facial-plastic-heading">
            <h1>Facial Plastic Surgery</h1>
            <h4>Expert surgical solutions to restore form and function with precision and care</h4>
          </div>

          <div className="facial-plastic-content">
            <ul>
              <li>
                <strong>Rhinoplasty</strong>
                <div className="plastic-images">
                  <img src="/nose8.jpg" alt="plastic" />
                </div>
              </li>
              <li>
                <strong>Pinnaplasty</strong>
              </li>
              <li>
                <strong>Blepharoplasty</strong>
                <div className="plastic-images">
                  <img src="/plastic2.jpg" alt="plastic" />
                </div>
              </li>
              <li>
                <strong>Genioplasty</strong>
                <div className="plastic-images">
                  <img src="/plastic4.jpg" alt="plastic" />
                </div>
              </li>
              <li>
                <strong>Rhytidectomy</strong>
              </li>
              <li>
                <strong>Brow Lift</strong>
                <div className="plastic-images">
                  <img src="/plastic6.jpg" alt="plastic" />
                </div>
              </li>
              <li>
                <strong>Forehead Lift</strong>
              </li>
              <li>
                <strong>Face Lift</strong>
                <div className="plastic-images">
                  <img src="/plastic8.jpg" alt="plastic" />
                </div>
              </li>
              <li>
                <strong>Neck Lift</strong>
              </li>
              <li>
                <strong>Facial Reanimation</strong>
                <div className="plastic-images">
                  <img src="/plastic10.jpg" alt="plastic" />
                </div>
              </li>
              <li>
                <strong>Implants and Prosthesis</strong>
              </li>
            </ul>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default FacialPlastic;
