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
                        Advancing knowledge through discovery
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
                            <motion.img
                                src="/about1.webp"
                                alt=""
                                initial={{ y: -50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                            />
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
                            <img src="/about1.webp" alt="" />
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
                                    When the respective field specialists plan & work together; magic happens and so is our beginning of Swami's on a similar note when ENT Consultants, ENT Surgeons, Dental Consultants & Surgeons, Cosmetologist, Maxillofacial Surgeons, Skin specialists decided to collaborate & provide Healthcare services at par with international standards.
                                </motion.h4>

                                <motion.button
                                    initial={{ y: 50, opacity: 0 }}
                                    variants={{
                                        visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
                                    }}
                                >
                                    Learn More
                                </motion.button>

                                <motion.div
                                    className="customers-wrapper"
                                    initial={{ y: 50, opacity: 0 }}
                                    variants={{
                                        visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
                                    }}
                                >
                                    <div className="customer">
                                        <h2>550+</h2>
                                        <h4>Happy Customers</h4>
                                    </div>

                                    <div className="divider"></div>

                                    <div className="customer">
                                        <h2>12+</h2>
                                        <h4>Year Experience</h4>
                                    </div>
                                </motion.div>

                                <motion.img
                                    src="/about.webp"
                                    alt="about"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    variants={{
                                        visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
                                    }}
                                />

                                <motion.img
                                    src="/about1.webp"
                                    alt="about"
                                    className="img2"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    variants={{
                                        visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
                                    }}
                                />
                            </div>

                            <motion.div
                                className="about-us-middle-right"
                                initial={{ x: 100, opacity: 0 }}
                                variants={{
                                    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
                                }}
                            >
                                <img src="/about1.webp" alt="" />
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
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            variants={{
                                visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
                            }}
                        >
                            Empowering discovery shaping future
                        </motion.h2>

                        <svg
                            width="92%"
                            height="100"
                            viewBox="0 0 1000 100"
                            preserveAspectRatio="none"
                            style={{ marginTop: "2vw" }}
                        >
                            <motion.path
                                d="M1000 70 H500 L400 20 H0"
                                stroke="#C3A1C6"
                                strokeWidth="1"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </svg>

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
                                    Is to prevent people from wandering from one setup to another in order to have a wholesome treatment related to ENT, Dental, Cosmetology thereby saving precious time, energy and unnecessary expenses. At the same time we strive for best possible Healthcare quality in our specialities.
                                </h4>
                                <motion.img
                                    src="/about2.webp"
                                    alt=""
                                    transition={{ duration: 0.3 }}
                                    style={{ display: "block", width: "100%", marginTop: "1rem" }}
                                />
                            </motion.div>

                            <motion.div
                                className="about-us-bottom-inner-middle"
                                initial={{ y: -50, opacity: 0 }}
                                variants={{
                                    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                <motion.img
                                    src="/about3.webp"
                                    alt=""
                                    transition={{ duration: 0.3 }}
                                    style={{ display: "block", width: "100%" }}
                                />
                            </motion.div>

                            <motion.div
                                className="about-us-bottom-inner-right"
                                initial={{ y: 50, opacity: 0 }}
                                variants={{
                                    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                <motion.img
                                    src="/about2.webp"
                                    alt=""
                                    transition={{ duration: 0.3 }}
                                    style={{ display: "block", width: "100%" }}
                                />
                                <h2>Our Vision</h2>
                                <h4>
                                    It remains crystal clear as to where this branch of science is going to land human experience in the upcoming decades which calls for dedication, integrity, research & innovation. We tend to stay on the same rigorous standards and intent as the pioneers of this field were & still are.
                                </h4>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-teams"
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
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                            }}
                        >
                            World-class surgeons exceptional results
                        </motion.h2>

                        <motion.div
                            className="team"
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
                            }}
                        >
                            {[
                                { name: "Dr. Jane Doe", role: "Cardiologist" },
                                { name: "Dr. John Smith", role: "Orthopedic Surgeon" },
                                { name: "Dr. Lisa Ray", role: "Dermatologist" },
                                { name: "Dr. Mark Lee", role: "Neurosurgeon" }
                            ].map(({ name, role }, i) => (
                                <motion.div
                                    className="elem"
                                    key={i}
                                    whileHover={{ flex: 1.4 }}
                                    transition={{ type: "tween", duration: 0.3 }}
                                >
                                    <img src="about1.webp" alt="team" />
                                    <div className="info">
                                        <h4>{name}</h4>
                                        <p>{role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.button
                            onClick={() => {
                                window.location.href = `/team`;
                            }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                            }}
                        >
                            Explore Team
                        </motion.button>
                    </motion.div>
                    <motion.div
                        className="booking"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { scale: 1 },
                            visible: { scale: 1.05, transition: { duration: 0.8 } },
                        }}
                    >
                        <motion.h1
                            variants={{
                                hidden: { y: -50, opacity: 0 },
                                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
                            }}
                        >
                            Schedule your free consultation now
                        </motion.h1>
                        <motion.button
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
                            }}
                        >
                            Book Now
                        </motion.button>
                    </motion.div>
                </motion.div>
            </main>
            <Footer />
        </>
    );
};

export default AboutUs;
