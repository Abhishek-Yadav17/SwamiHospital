import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Homepage.scss'

const Homepage = () => {

    const [hoverIndex, setHoverIndex] = useState(null);
    const [isDetailsHovered, setDetailsHovered] = useState(false);
    const showDetails = hoverIndex !== null || isDetailsHovered;

    const services = [
        {
            title: "ENT",
            description: "Ear, Nose, and Throat treatments for improved breathing, hearing, and overall comfort. Ear, Nose, and Throat treatments for improved breathing, hearing, and overall comfort. Ear, Nose, and Throat treatments for improved breathing, hearing, and overall comfort.",
        },
        {
            title: "Facial Cosmetics",
            description: "Customized treatments to harmonize your facial features with symmetry and balance. Customized treatments to harmonize your facial features with symmetry and balance. Customized treatments to harmonize your facial features with symmetry and balance.",
        },
        {
            title: "Facial Plastic Surgery",
            description: "Advanced surgical procedures to enhance or restore facial aesthetics and function. Advanced surgical procedures to enhance or restore facial aesthetics and function. Advanced surgical procedures to enhance or restore facial aesthetics and function.",
        },
        {
            title: "Dentistry",
            description: "Comprehensive dental care for a confident, healthy, and beautiful smile. Comprehensive dental care for a confident, healthy, and beautiful smile. Comprehensive dental care for a confident, healthy, and beautiful smile.",
        },
    ];

    const plansData = [
        {
            title: "Seamless Care, From Admission to Recovery",
            desc: "From the moment I stepped in, the staff ensured every step of my surgery and recovery was smooth and stress-free. I felt supported throughout.",
            img: "/about1.webp"
        },
        {
            title: "Truly Personalized Treatment Plans",
            desc: "The doctors took time to explain everything and tailored my treatment to my exact condition. I wasn't just another patient — I felt heard.",
            img: "/about1.webp"
        },
        {
            title: "Appointments That Respect Your Time",
            desc: "Booking was easy and I was seen on time. They value your schedule and make healthcare accessible without long waits.",
            img: "/about1.webp"
        },
        {
            title: "Highest Hygiene & Safety Standards",
            desc: "Everything was spotless. Equipment was sanitized before every use, and I felt completely safe during my entire stay.",
            img: "/about1.webp"
        }
    ];


    const [planIndex, setPlanIndex] = useState(0);
    const currentPlan = plansData[planIndex];

    const changePlan = (newIndex) => {
        setPlanIndex(newIndex);
    };

    const next = () => changePlan((planIndex + 1) % plansData.length);
    const prev = () => changePlan((planIndex - 1 + plansData.length) % plansData.length);

    return (
        <>
            <Navbar />
            <main>
                <div className="hero">
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    >
                        Sculpting confidence defining true beauty
                    </motion.h1>
                    <motion.div
                        className="rotating"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    >
                        <img src="/face2.jpg" alt="circle" className="circle-img" />
                        <motion.svg
                            viewBox="0 0 200 200"
                            className="circle-svg"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                        >
                            <defs>
                                <path id="circlePath" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" />
                            </defs>
                            <text>
                                <textPath href="#circlePath" startOffset="0%">
                                    Book • Consult • Glow • Repeat •
                                </textPath>
                            </text>
                        </motion.svg>
                    </motion.div>

                    <motion.div
                        className="hero-buttons"
                        onMouseLeave={() => {
                            setHoverIndex(null);
                            setDetailsHovered(false);
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onMouseEnter={() => setHoverIndex(index)}
                            >
                                {service.title}
                            </button>
                        ))}

                        <motion.div
                            className="buttons-details"
                            onMouseEnter={() => setDetailsHovered(true)}
                            onMouseLeave={() => setDetailsHovered(false)}
                            initial={{ opacity: 0, y: 20, pointerEvents: "none" }}
                            animate={{
                                opacity: showDetails ? 1 : 0,
                                y: showDetails ? 0 : 20,
                                pointerEvents: showDetails ? "auto" : "none"
                            }}
                            transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
                        >
                            <motion.div
                                key={hoverIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2>{services[hoverIndex]?.title}</h2>
                                <h4>{services[hoverIndex]?.description}</h4>
                                <button
                                    className="learn-more-btn"
                                    onClick={() => {
                                        window.location.href = `/services`;
                                    }}
                                >Learn More</button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.img
                        src="/model.webp"
                        alt="model"
                        className="model-img"
                        initial={{ opacity: 0, x: 100, y: 100 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                    />
                </div>
                <motion.div
                    className="page1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.3 } }
                    }}
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                        }}
                    >
                        The Stats Speaks for Themselves
                    </motion.h2>
                    <motion.div className="stats">
                        {[
                            ["96%", "Patient Satisfaction Rate"],
                            ["12+", "Years of Industry Experience"],
                            ["10,000+", "Successful Surgeries Performed"],
                            ["30%", "State-of-the-Art Facilities"],
                        ].map(([num, desc]) => (
                            <motion.div
                                className="elem"
                                key={num}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                }}
                            >
                                <h1>{num}</h1>
                                <h4>{desc}</h4>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="about"
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
                            Redefining beauty with personalized care
                        </motion.h1>

                        <svg
                            width="100%"
                            height="100"
                            viewBox="0 0 1000 100"
                            preserveAspectRatio="none"
                            style={{ marginTop: "2vw" }}
                        >
                            <motion.path
                                d="M0 70 H500 L600 20 H1000"
                                stroke="#C3A1C6"
                                strokeWidth="1"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </svg>

                        <div className="about-inner">
                            <div className="about-inner-left">
                                <motion.h2
                                    variants={{
                                        hidden: { opacity: 0, y: -50 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                                    }}
                                >
                                    Why Choose Us?
                                </motion.h2>

                                <motion.iframe
                                    src="https://www.google.com/maps/embed?pb=..."
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    variants={{
                                        hidden: { opacity: 0, y: -50 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                                    }}
                                ></motion.iframe>

                                <div className="line"></div>

                                <motion.h4
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                                    }}
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quos. Sed cum porro temporibus vero. Fugiat ea voluptates quasi dolore error, fugit!
                                </motion.h4>

                                <motion.button
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                                    }}
                                >
                                    Book an appointment
                                </motion.button>
                            </div>

                            <motion.div
                                className="about-inner-right"
                                variants={{
                                    hidden: { opacity: 0, x: 100 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                                }}
                            >
                                <img src="about1.webp" alt="about" />
                            </motion.div>
                        </div>
                    </motion.div>

                </motion.div>
                <motion.div
                    className="page2"
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
                    className="page3"
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
                        Redefining beauty with personalized care
                    </motion.h1>

                    <div className="svg-wrapper">
                        <svg width="92%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <motion.path
                                d="M0 70 H500 L600 20 H1000"
                                stroke="#C3A1C6"
                                strokeWidth="1"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>

                    <motion.div
                        className="testimonials"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    delayChildren: 1,
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        <motion.div
                            className="testimonials-right"
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                            }}
                        >
                            <img src={currentPlan.img} alt="testimonials" />
                        </motion.div>

                        <motion.div
                            className="testimonials-left"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.2 }
                                }
                            }}
                        >
                            <motion.h2
                                variants={{
                                    hidden: { opacity: 0, y: -40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                }}
                            >
                                {currentPlan.title}
                            </motion.h2>

                            <motion.div
                                className="testimonials-left-inner"
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                            >
                                <div className="rating">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.i
                                            key={i}
                                            className="ri-star-fill"
                                            variants={{
                                                hidden: { opacity: 0, x: 30 },
                                                visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                                            }}
                                        />
                                    ))}
                                </div>

                                <motion.h4
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                    }}
                                >
                                    {currentPlan.desc}
                                </motion.h4>
                            </motion.div>

                            <motion.div
                                className="doctor"
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                            >
                                <motion.h5
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                    }}
                                >
                                    Doctor Name
                                </motion.h5>
                                <motion.h5
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                    }}
                                >
                                    (Role Of Doctor)
                                </motion.h5>
                            </motion.div>

                            <motion.div
                                className="pagination-btns"
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                            >
                                <motion.i
                                    className="ri-arrow-left-line"
                                    onClick={prev}
                                    variants={{
                                        hidden: { scale: 0.5, opacity: 0 },
                                        visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } }
                                    }}
                                />
                                <motion.i
                                    className="ri-arrow-right-line"
                                    onClick={next}
                                    variants={{
                                        hidden: { scale: 0.5, opacity: 0 },
                                        visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } }
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </main >
            <Footer />
        </>
    )
}

export default Homepage