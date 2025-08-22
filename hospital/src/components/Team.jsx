import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Team.scss'
import doctorData from '../doctorsData.json';

const Team = () => {

    const navigate = useNavigate();
    const [hovered, setHovered] = useState(null);
    const doctors = Object.entries(doctorData);

    return (
        <>
            <Navbar />
            <main>
                <motion.div
                    className="doctor-team"
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
                            visible: {
                                y: 0, opacity: 1,
                                transition: { duration: 0.6 }
                            }
                        }}
                    >
                        Delicate Approach, Exceptional Results
                    </motion.h1>

                    <motion.div
                        className="team-cards"
                        variants={{
                            hidden: { y: 50, opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
                        }}
                    >
                        {doctors.map(([id, { name, role }], i) => (
                            <div key={i} className={`card-wrapper card-${i}`}>
                                <h2 className="card-title">{role}</h2>

                                <motion.div
                                    className="elem"
                                    transition={{ type: "tween", duration: 0.3 }}
                                    onHoverStart={() => setHovered(i)}
                                    onHoverEnd={() => setHovered(null)}
                                    onClick={() => window.location.href = `/doctors/${id}`}
                                >
                                    <motion.img
                                        src="about1.webp"
                                        alt={name}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: 'tween', duration: 0.3 }}
                                    />
                                    <motion.div
                                        className="social-icons"
                                        initial={{ top: '-50%' }}
                                        animate={hovered === i ? { top: '2%' } : { top: '-50%' }}
                                        transition={{ duration: 0.1 }}
                                    >
                                        <i className="ri-facebook-fill"></i>
                                        <i className="ri-twitter-x-fill"></i>
                                        <i className="ri-instagram-fill"></i>
                                    </motion.div>
                                    <motion.div
                                        className="doctor-info"
                                        animate={hovered === i ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <h4>{name}</h4>
                                        <p>{role}</p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </main >
            <Footer />
        </>
    )
}

export default Team