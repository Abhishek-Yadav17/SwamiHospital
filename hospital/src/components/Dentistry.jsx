import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Dentistry.scss';

const Dentistry = () => {
  return (
    <>
      <Navbar />
      <main>
        <motion.div
          className="dentistry"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="dentistry-heading">
            <h1>Dentistry Department</h1>
            <h4>Complete Dental Care for Health, Function, and Aesthetics</h4>
          </div>

          <div className="dentistry-content">

            <div className="dentistry-section">
              <h2>General Dentistry</h2>
              <ul>
                <li>
                  <strong>Consultation + X-rays</strong>
                </li>
                <li>
                  <strong>Scaling & Root Planing</strong>
                  <div className="teeth-images">
                    <video src="/teeth1.mp4" autoPlay loop muted />
                  </div>
                </li>
                <li>
                  <strong>Pit & Fissure Sealants</strong>
                  <div className="teeth-images">
                    <video src="/teeth2.mp4" autoPlay loop muted />
                  </div>
                </li>
                <li>
                  <strong>Composite Filling</strong>
                  <div className="teeth-images">
                    <video src="/teeth3.mp4" autoPlay loop muted />
                  </div>
                </li>
                <li>
                  <strong>GIC Filling</strong>
                </li>
                <li>
                  <strong>Routine Extraction</strong>
                  <div className="teeth-images">
                    <video src="/teeth4.mp4" autoPlay loop muted />
                  </div>
                </li>
                <li>
                  <strong>Crown Cementation</strong>
                </li>
                <li>
                  <strong>TMJ Disorders</strong>
                  <div className="teeth-images">
                    <video src="/teeth5.mp4" autoPlay loop muted />
                  </div>
                </li>
                <li>
                  <strong>Oral Cancer Screening</strong>
                  <div className="teeth-images">
                    <img src="/teeth6.jpg" alt="teeth" />
                  </div>
                </li>
                <li>
                  <strong>Oral Biopsy</strong>
                </li>
              </ul>
            </div>

            <div className="dentistry-section">
              <h2>Periodontal Procedures</h2>
              <ul>
                <li><strong>Scaling & Root Planing</strong></li>
                <li>
                  <strong>Flap Surgery</strong>
                  <div className="teeth-images">
                    <img src="/teeth8.jpg" alt="teeth" />
                  </div>
                </li>
                <li>
                  <strong>Splint Placement</strong>
                  <div className="teeth-images">
                    <img src="/teeth7.jpg" alt="teeth" />
                  </div>
                </li>
                <li>
                  <strong>Laser Gum Depigmentation</strong>
                  <div className="teeth-images">
                    <img src="/teeth9.jpg" alt="teeth" />
                  </div>
                </li>
                <li><strong>Gum Recontouring / Esthetic Surgery</strong></li>
                <li><strong>Bone Grafting</strong></li>
              </ul>
            </div>

            <div className="dentistry-section">
              <h2>Endodontic Procedures</h2>
              <ul>
                <li>
                  <strong>Root Canal (Simple)</strong>
                  <div className="teeth-images">
                    <video src="teeth10.mp4" autoPlay loop muted></video>
                  </div>
                </li>
                <li><strong>Re-Root Canal Treatment (Re-RCT)</strong></li>
                <li><strong>Post & Core (Metal / Fibre)</strong></li>
                <li><strong>Vital & Non Vital Teeth Whitening</strong></li>
              </ul>
            </div>

            <div className="dentistry-section">
              <h2>Prosthodontic Procedures</h2>
              <ul>
                <li><strong>Crown & Bridge</strong></li>
                <li><strong>Full Ceramic Emax</strong></li>
                <li>
                  <strong>Porcelain Veneer / Laminate</strong>
                  <div className="teeth-images">
                    <video src="teeth12.mp4" autoPlay loop muted></video>
                  </div>
                </li>
                <li><strong>Inlay</strong></li>
                <li><strong>Onlay</strong></li>
                <li><strong>Removable Partial Denture (RPD)</strong></li>
                <li><strong>Cast Partial Dentures</strong></li>
                <li>
                  <strong>Complete Denture</strong>
                  <div className="teeth-images">
                    <video src="teeth13.mp4" autoPlay loop muted></video>
                  </div>
                </li>
                <li>
                  <strong>Smile Design</strong>
                  <div className="teeth-images">
                    <img src="/teeth14.jpg" alt="teeth" />
                  </div>
                </li>
                <li>
                  <strong>Occlusal Adjustment</strong>
                </li>
              </ul>
            </div>

            <div className="dentistry-section">
              <h2>Implantology</h2>
              <ul>
                <li>
                  <strong>Single Implant</strong>
                  <div className="teeth-images">
                    <video src="teeth16.mp4" autoPlay loop muted></video>
                  </div>
                </li>
              </ul>
            </div>

            <div className="dentistry-section">
              <h2>Orthodontics</h2>
              <ul>
                <li>
                  <strong>Metal Braces</strong>
                  <div className="teeth-images">
                    <img src="/teeth20.webp" alt="teeth" />
                  </div>
                </li>
                <li>
                  <strong>Ceramic Braces</strong>
                  <div className="teeth-images">
                    <img src="/teeth21.jpeg" alt="teeth" />
                  </div>
                </li>
                <li>
                  <strong>Invisible Braces</strong>
                  <div className="teeth-images">
                    <img src="/teeth23.jpeg" alt="teeth" />
                  </div>
                </li>
                <li>
                  <strong>Lingual Braces</strong>
                  <div className="teeth-images">
                    <img src="/teeth22.webp" alt="teeth" />
                  </div>
                </li>
                <li>
                  <strong>Night Guard Appliance / Sports Guard</strong>
                  <div className="teeth-images">
                    <img src="/teeth18.jpg" alt="teeth" />
                    <img src="/teeth19.jpg" alt="teeth" />
                  </div>
                </li>
              </ul>
            </div>

            <div className="dentistry-section">
              <h2>Oral Surgical Procedures</h2>
              <ul>
                <li><strong>Simple Extractions</strong></li>
                <li><strong>Difficult Extractions</strong></li>
                <li><strong>Disimpaction</strong></li>
                <li><strong>Exposure of Impacted Teeth</strong></li>
                <li><strong>Indirect Sinus Lift</strong></li>
                <li><strong>Ridge Augmentation</strong></li>
                <li><strong>Bony Spicule Removal</strong></li>
                <li><strong>Vestibule Enhancement</strong></li>
                <li><strong>Cyst Removal (Enucleation)</strong></li>
              </ul>
            </div>

          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default Dentistry;
