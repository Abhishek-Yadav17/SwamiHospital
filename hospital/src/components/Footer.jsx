import React from 'react'
import { motion } from 'framer-motion';
import '../styles/Footer.scss'

const Footer = () => {
    return (
        <>
            <footer>
                <motion.div
                    className="footer"
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
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                        }}
                    >
                        Swami's Clinic
                    </motion.h1>

                    <svg
                        width="100%"
                        height="100"
                        viewBox="0 0 1000 100"
                        preserveAspectRatio="none"
                        style={{ marginTop: "2vw" }}
                    >
                        <motion.path
                            d="M0 50 L350 50 L390 75 L610 75 L650 50 L1000 50"
                            stroke="#C3A1C6"
                            strokeWidth="1"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </svg>
                </motion.div>
                <motion.div
                    className="footer-bottom"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.3 },
                        },
                    }}
                >
                    <motion.div
                        className="bottom-inner"
                    >
                        <motion.div
                            className="bottom-left"
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
                            }}
                        >
                            <motion.img
                                src="/logo.png"
                                alt="logo"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.7 }}
                            />
                            <motion.h4
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span>Address:</span> Office 202, 2nd floor Vedriti Building, <br />
                                Above Gajlaxmi Jwellers, Tata Guardroom Bus Stop, Nagar Road, Pune-14
                            </motion.h4>
                        </motion.div>

                        <motion.div
                            className="bottom-right"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.25 } },
                            }}
                        >
                            <motion.div
                                className="elem"
                                variants={{
                                    hidden: { opacity: 0, y: -40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                                }}
                            >
                                <motion.h2>Follow Us</motion.h2>
                                <motion.div className="social-media">
                                    {["ri-instagram-fill", "ri-facebook-fill", "ri-linkedin-fill"].map((icon, i) => (
                                        <motion.i
                                            key={i}
                                            className={icon}
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: i * 0.2 }}
                                        />
                                    ))}
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="elem"
                                variants={{
                                    hidden: { opacity: 0, y: -40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                                }}
                            >
                                <motion.h2>Quick Links</motion.h2>
                                {["Homepage", "Services", "Team", "Contact", "About"].map((text, i) => (
                                    <motion.h4
                                        key={i}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.15 }}
                                        onClick={() => window.location.href = text === "Homepage" ? "/" : `/${text.toLowerCase()}`}
                                    >
                                        {text}
                                    </motion.h4>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="copyright"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                    >
                        &copy;{new Date().getFullYear()} Swami's Clinic. All rights reserved.
                    </motion.div>
                </motion.div>
            </footer>
        </>
    )
}

export default Footer