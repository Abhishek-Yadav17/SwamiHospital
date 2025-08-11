import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/FacialCosmetics.scss';

const FacialCosmetics = () => {
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
          <div className="facial-heading">
            <h1>Facial Cosmetics & Aesthetic Treatments</h1>
            <h4>Advanced dermatological solutions for glowing, youthful skin</h4>
          </div>

          <div className="facial-content">
            <ul>
              <li>
                <strong>Dermascopic Skin & Hair Analysis</strong>
                <h4>Our Skin Expert analyses and gives the perfect treatment plan using advanced technology.</h4>
                <div className="cosmetic-images">
                  <img src="/cosmetic1.jpg" alt="cosmetic" />
                </div>
              </li>
              <li>
                <strong>HydraFacial</strong>
                <h4>Multi-step, non-invasive facial that cleanses, exfoliates, extracts, and hydrates the skin.</h4>
                <div className="cosmetic-images">
                  <video src="/cosmetic2.mp4" autoPlay loop muted />
                  <img src="/cosmetic2a.jpg" alt="cosmetic" />
                </div>
              </li>
              <li>
                <strong>Dermaplaning</strong>
                <h4>Uses a sterile scalpel to gently scrape away dead skin and peach fuzz.</h4>
                <h4>Reveals brighter skin, boosts absorption, and smoothens makeup application.</h4>
                <div className="cosmetic-images">
                  <img src="/cosmetic3.jpg" alt="cosmetic" />
                </div>
              </li>
              <li>
                <strong>Chemical Peel</strong>
                <h4>Applies a solution to exfoliate skin, remove damaged layers, and improve texture and tone.</h4>
                <div className="cosmetic-images">
                  <img src="/cosmetic4.jpg" alt="cosmetic" />
                </div>
              </li>
              <li>
                <strong>LED Light Therapy</strong>
                <h4>Non-invasive therapy using light waves to heal skin, boost collagen, and reduce inflammation.</h4>
                <div className="cosmetic-images">
                  <img src="/cosmetic5.jpg" alt="cosmetic" />
                </div>
              </li>
              <li>
                <strong>Mesotherapy</strong>
                <h4>Injects active compounds into the mesoderm to rejuvenate and treat skin conditions.</h4>
                <div className="cosmetic-images">
                  <img src="/cosmetic6.jpg" alt="cosmetic" />
                  <img src="/cosmetic6b.jpg" alt="cosmetic" />
                </div>
              </li>
              <li>
                <strong>Derma Roller</strong>
              </li>
              <li>
                <strong>Microneedling</strong>
                <h4>Collagen induction therapy using tiny needles to trigger skin healing and firming.</h4>
              </li>
              <li>
                <strong>Acne & Scar Treatment</strong>
              </li>
              <li>
                <strong>PRP (Platelet-Rich Plasma)</strong>
                <h4>Uses your own platelets to heal tissues and stimulate hair growth in hair loss cases.</h4>
                <div className="cosmetic-images">
                  <img src="/cosmetic7.jpg" alt="cosmetic" />
                </div>
              </li>
              <li>
                <strong>Botox</strong>
                <h4>Temporarily relaxes facial muscles to smooth wrinkles and fine lines.</h4>
              </li>
              <li>
                <strong>Hair Treatment & Hair Transplant</strong>
                <h4>Advanced solutions for bald patches, hair loss, and restoring shine and volume to hair.</h4>
                <div className="cosmetic-images">
                  <img src="/cosmetic8.jpg" alt="cosmetic" />
                </div>
              </li>
              <li>
                <strong>Laser Hair Reduction</strong>
              </li>
              <li>
                <strong>Tattoo Removal</strong>
              </li>
              <li>
                <strong>Scar Removal</strong>
              </li>
              <li>
                <strong>Beard Patch Treatment</strong>
              </li>
              <li>
                <strong>Pigmentation-depigmentation</strong>
              </li>
              <li>
                <strong>All kind of Hair Treatment</strong>
              </li>
            </ul>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default FacialCosmetics;
