import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Team.scss'
import doctorData from '../doctorsData.json';

const Team = () => {

    const [hovered, setHovered] = useState(null);
    const doctors = Object.entries({
        ...doctorData.CEO,
        ...doctorData.RND,
        ...doctorData.ENT,
        ...doctorData.Dentistry,
        ...doctorData["Facial Aesthetics"]
    });

    const categories = Object.entries(doctorData);

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

                    <div className="categories-wrapper">
                        <div className="row-1">
                            {["CEO", "RND"].map((category, catIndex) => {
                                const doctors = Object.entries(doctorData[category]);
                                return (
                                    <motion.div key={catIndex} className="category-group">
                                        <h2>{category}</h2>
                                        <motion.div
                                            className="team-cards"
                                            variants={{
                                                hidden: { y: 50, opacity: 0 },
                                                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
                                            }}
                                        >
                                            {doctors.map(([id, { name, role }], i) => (
                                                <motion.div
                                                    key={id}
                                                    className={`elem card-${i}`}
                                                    transition={{ type: "tween", duration: 0.3 }}
                                                    onHoverStart={() => setHovered(i)}
                                                    onHoverEnd={() => setHovered(null)}
                                                    onClick={() => (window.location.href = `/doctors/${id}`)}
                                                >
                                                    <motion.img
                                                        src="about1.webp"
                                                        alt={name}
                                                        whileHover={{ scale: 1.05 }}
                                                        transition={{ type: "tween", duration: 0.3 }}
                                                    />
                                                    <motion.div
                                                        className="social-icons"
                                                        initial={{ top: "-50%" }}
                                                        animate={hovered === i ? { top: "2%" } : { top: "-50%" }}
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
                                );
                            })}
                        </div>

                        <div className="row-2">
                            {["ENT", "Dentistry"].map((category, catIndex) => {
                                const doctors = Object.entries(doctorData[category]);
                                return (
                                    <motion.div key={catIndex} className="category-group">
                                        <h2>{category}</h2>
                                        <motion.div
                                            className="team-cards"
                                            variants={{
                                                hidden: { y: 50, opacity: 0 },
                                                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
                                            }}
                                        >
                                            {doctors.map(([id, { name, role }], i) => (
                                                <motion.div
                                                    key={id}
                                                    className={`elem card-${i}`}
                                                    transition={{ type: "tween", duration: 0.3 }}
                                                    onHoverStart={() => setHovered(i)}
                                                    onHoverEnd={() => setHovered(null)}
                                                    onClick={() => (window.location.href = `/doctors/${id}`)}
                                                >
                                                    <motion.img
                                                        src="about1.webp"
                                                        alt={name}
                                                        whileHover={{ scale: 1.05 }}
                                                        transition={{ type: "tween", duration: 0.3 }}
                                                    />
                                                    <motion.div
                                                        className="social-icons"
                                                        initial={{ top: "-50%" }}
                                                        animate={hovered === i ? { top: "2%" } : { top: "-60%" }}
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
                                );
                            })}
                        </div>

                        <div className="row-3">
                            {["Facial Aesthetics"].map((category, catIndex) => {
                                const doctors = Object.entries(doctorData[category]);
                                return (
                                    <motion.div key={catIndex} className="category-group">
                                        <h2>{category}</h2>
                                        <motion.div
                                            className="team-cards"
                                            variants={{
                                                hidden: { y: 50, opacity: 0 },
                                                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
                                            }}
                                        >
                                            {doctors.map(([id, { name, role }], i) => (
                                                <motion.div
                                                    key={id}
                                                    className={`elem card-${i}`}
                                                    transition={{ type: "tween", duration: 0.3 }}
                                                    onHoverStart={() => setHovered(i)}
                                                    onHoverEnd={() => setHovered(null)}
                                                    onClick={() => (window.location.href = `/doctors/${id}`)}
                                                >
                                                    <motion.img
                                                        src="about1.webp"
                                                        alt={name}
                                                        whileHover={{ scale: 1.05 }}
                                                        transition={{ type: "tween", duration: 0.3 }}
                                                    />
                                                    <motion.div
                                                        className="social-icons"
                                                        initial={{ top: "-50%" }}
                                                        animate={hovered === i ? { top: "2%" } : { top: "-50%" }}
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
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </main >
            <Footer />
        </>
    )
}

export default Team