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
          className="facial-cosmetics"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default FacialPlastic;
