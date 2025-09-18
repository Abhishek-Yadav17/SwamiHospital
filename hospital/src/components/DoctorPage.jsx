import React from 'react';
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/DoctorPage.scss'
import doctorData from '../doctorsData.json';

const DoctorPage = () => {
    const { doctorId } = useParams();
    const doctor =
        doctorData["CEO & Director"][doctorId] ||
        doctorData.RND[doctorId] ||
        doctorData.ENT[doctorId] ||
        doctorData.Dentistry[doctorId] ||
        doctorData["Facial Aesthetics"][doctorId];

    return (
        <>
            <Navbar />
            <main>
                <motion.div
                    className="doctors"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.div
                        className="doctors-top"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        style={{ display: 'flex', gap: '2rem' }}
                    >
                        <motion.div
                            className="doctor-right"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p>{doctor.role}</p>
                            <h1>{doctor.name}</h1>
                            <h4>{doctor.about}</h4>
                            <div className="buttons">
                                <button><i className="ri-phone-fill"></i> {doctor.phone}</button>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="doctors-bottom"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <motion.div
                            className="doctors-bottom-left"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.3 } },
                                hidden: {}
                            }}
                        >
                            <div className="doctors-bottom-inner">
                                <h2>About {doctor.name}</h2>
                                <h4>{doctor.about}</h4>
                            </div>
                            <div className="doctors-bottom-inner">
                                <h2>Designation</h2>
                                {doctor.designation.map((item, i) => (
                                    <h4 key={i}>{item}</h4>
                                ))}
                            </div>
                            <div className="doctors-bottom-inner">
                                <h2>Experience</h2>
                                {doctor.experience.map((item, i) => (
                                    <h4 key={i}>{item}</h4>
                                ))}
                            </div>
                            <div className="doctors-bottom-inner">
                                <h2>Skill Set</h2>
                                <ul>
                                    {doctor.services.map((service, i) => (
                                        <li key={i}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            className="doctors-bottom-right"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Get in touch</h2>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laboriosam?</h4>
                            <form className="appointment-form">
                                <input type="text" placeholder="Full Name" required />
                                <input type="tel" placeholder="Phone Number" required />
                                <textarea placeholder="Your Message" rows="4" required></textarea>
                                <button type="submit">Book Appointment</button>
                            </form>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </main>
            <Footer />
        </>
    );
};

export default DoctorPage;
