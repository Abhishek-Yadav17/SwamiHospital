import React from 'react';
import { motion } from 'framer-motion'
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/AboutUs.scss'

const AboutUs = () => {

    return (
        <>
            <Navbar />
            <main>
                <motion.div
                    className="about-us"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        Customised Care With Expertise
                    </motion.h1>

                    <motion.div
                        className="members"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="member-images">
                            <img src="/about.webp" alt="member 1" />
                            <img src="/about.webp" alt="member 2" />
                            <img src="/about.webp" alt="member 3" />
                        </div>
                        <h4>10+ Expert Team Members</h4>
                    </motion.div>

                    <motion.div
                        className="about-us-top"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.3 }
                            }
                        }}
                    >
                        <div className="about-us-top-left">
                            <motion.h4
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                            >
                                At Swami's we provice one stop solution for Ear, Nose, Throat, Dental, Facial Aesthetics & Facial Plastic Surgery possible due to a well knit coordinated teamwork between the Swami's Directors, Dr. Adeetya Varal & Dr. Pradnya Karmarkar, Consultants, Surgeons, Technicians, Health Care Professionals
                            </motion.h4>
                            <motion.button
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                            >
                                Book Now
                            </motion.button>
                        </div>
                        <motion.div
                            className="about-us-top-right"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <img src="/about.jpg" alt="" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="about-us-middle"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.3 }
                            }
                        }}
                    >
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            variants={{
                                visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
                            }}
                        >
                            Our Story
                        </motion.h2>

                        <svg
                            width="92%"
                            height="100"
                            viewBox="0 0 1000 100"
                            preserveAspectRatio="none"
                            style={{ marginTop: '2vw' }}
                        >
                            <motion.path
                                d="M0 70 H500 L600 20 H1000"
                                stroke="#C3A1C6"
                                strokeWidth="1"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 2, ease: 'easeInOut' }}
                            />
                        </svg>

                        <div className="about-us-middle-inner">
                            <div className="about-us-middle-left">
                                <motion.h4
                                    initial={{ y: -50, opacity: 0 }}
                                    variants={{
                                        visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
                                    }}
                                >
                                    When the respective field Specialists plan & work together; magic happens and so is our beginning of Swami's on a similar note when ENT Consultants, ENT Surgeons, Dental Consultants & Surgeons, Cosmetologists, Maxillofacial Surgeons, Skin Specialists decided to collaborate & provide Healthcare services at par with International Standards.
                                </motion.h4>

                                <motion.button
                                    initial={{ y: 50, opacity: 0 }}
                                    variants={{
                                        visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
                                    }}
                                >
                                    Learn More
                                </motion.button>
                            </div>

                            <motion.div
                                className="about-us-middle-right"
                                initial={{ x: 100, opacity: 0 }}
                                variants={{
                                    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
                                }}
                            >
                                <img src="/story.jpg" alt="story" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-us-bottom"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.3 }
                            }
                        }}
                    >
                        <div className="about-us-bottom-inner">
                            <motion.div
                                className="about-us-bottom-inner-left"
                                initial={{ y: 50, opacity: 0 }}
                                variants={{
                                    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                <h2>Our Mission</h2>
                                <h4>
                                    Is to prevent people from wandering from one setup to another in order to have a wholesome treatment related to ENT, Dental and Facial Aesthetics thereby saving their precious time, energy and undue expenses. We simultaneously aim to provide the highest caliber of healthcare in our areas of expertise.
                                </h4>
                                <h2>Our Vision</h2>
                                <h4>
                                    It is still very evident as to where this field of applied science of aesthetics will take human experience in the following decades, which necessitates commitment, honesty, integrity, creativity and innovation. We adhere to the same rigorous standards and intent as the pioneers of of this field were and still on.
                                </h4>
                            </motion.div>

                            <motion.div
                                className="about-us-bottom-inner-right"
                                initial={{ y: 50, opacity: 0 }}
                                variants={{
                                    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
                                }}
                            >
                                <motion.img
                                    src="/mission.jpg"
                                    alt="mission"
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.img
                                    src="/vision.jpg"
                                    alt="vision"
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </div>
                        <motion.div
                            className="about-us-team"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h2>Explore Our Team From Here:</h2>
                            <button
                                onClick={() => {
                                    window.location.href = `/team`;
                                }}
                            >Explore Team</button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </main>
            <Footer />
        </>
    );
};

export default AboutUs;
