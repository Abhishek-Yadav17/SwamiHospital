import React from 'react';
import { motion } from 'framer-motion'
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Services.scss'

const Services = () => {

    const services = [
        { title: 'Ear Nose Throat', subtitle: 'Comprehensive care for Ear, Nose, Throat, Head & Neck'},
        { title: 'Facial Aesthetics', subtitle: 'Advanced dermatological solutions for glowing, youthful skin'},
        { title: 'Dentistry', subtitle: 'Complete Dental Care for Health, Function, and Aesthetics'},
        { title: 'Facial Plastic Surgery', subtitle: 'Expert surgical solutions to restore form and function with precision and care'},
    ];

    return (
        <>
            <Navbar />
            <main>
                <motion.div
                    className="services"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.3 } }
                    }}
                >
                    <motion.h1
                        variants={{
                            hidden: { y: -50, opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
                        }}
                    >
                        Personalized Consultations For You
                    </motion.h1>

                    <motion.div
                        className="service-cards"
                        variants={{
                            hidden: { y: 50, opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
                        }}
                    >
                        {services.map(({ title, subtitle, slug }, i) => (
                            <div
                                className="card-wrapper"
                                key={i}
                            >
                                <motion.div
                                    className="card"
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    onClick={() => {
                                        window.location.href = `/${title.toLowerCase().replace(/\s+/g, '-')}`;
                                    }}
                                >
                                    <motion.img
                                        src="/about1.webp"
                                        alt="cards"
                                        variants={{
                                            rest: { scale: 1 },
                                            hover: { scale: 1.05 }
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.div
                                        className="view"
                                        variants={{
                                            rest: { y: 50, opacity: 0 },
                                            hover: { y: 0, opacity: 1 }
                                        }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        View
                                    </motion.div>
                                </motion.div>
                                <h2>{title}</h2>
                                <h4>{subtitle}</h4>
                            </div>
                        ))}
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

export default Services;
