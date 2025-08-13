import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Team.scss'

const Team = () => {

    const navigate = useNavigate();
    const [hovered, setHovered] = useState(null);

    const doctors = [
        { name: "Dr. Jane Doe", role: "Cardiologist" },
        { name: "Dr. John Smith", role: "Orthopedic Surgeon" },
        { name: "Dr. Lisa Ray", role: "Dermatologist" },
        { name: "Dr. Mark Lee", role: "Neurosurgeon" },
        { name: "Dr. Angela Wu", role: "Plastic Surgeon" },
        { name: "Dr. Chris Nolan", role: "ENT Specialist" },
    ];

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
                        variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
                    >
                        {doctors.map(({ name, role }, i) => (
                            <motion.div
                                className="elem"
                                key={i}
                                transition={{ type: "tween", duration: 0.3 }}
                                onHoverStart={() => setHovered(i)}
                                onHoverEnd={() => setHovered(null)}
                                onClick={() => {
                                    window.location.href = `/doctors/${name.replace(/\s+/g, '-').toLowerCase()}`;
                                }}
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
                        ))}
                    </motion.div>
                </motion.div>
            </main >
            <Footer />
        </>
    )
}

export default Team