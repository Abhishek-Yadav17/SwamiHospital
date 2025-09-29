import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    const [formData, setFormData] = useState({ fullName: '', phone: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://swamihospital-1.onrender.com/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            toast.success(data.message || 'Message sent!');
            setFormData({ fullName: '', phone: '', message: '' });
        } catch (err) {
            toast.error('Failed to send message');
        }
    };

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
                            {doctor.designation && doctor.designation.some(item => item !== "...") && (
                                <div className="doctors-bottom-inner">
                                    <h2>Designation</h2>
                                    {doctor.designation.map((item, i) => (
                                        <h4 key={i}>{item}</h4>
                                    ))}
                                </div>
                            )}
                            {doctor.experience && doctor.experience.some(item => item !== "...") && (
                                <div className="doctors-bottom-inner">
                                    <h2>Experience</h2>
                                    {doctor.experience.map((item, i) => (
                                        <h4 key={i}>{item}</h4>
                                    ))}
                                </div>
                            )}

                            {doctor.services && doctor.services.some(item => item !== "...") && (
                                <div className="doctors-bottom-inner">
                                    <h2>Skill Set</h2>
                                    <ul>
                                        {doctor.services.map((service, i) => (
                                            <li key={i}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            className="doctors-bottom-right"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Get in touch</h2>
                            <h4>Have a question or need to book a consultation? Send us a message and we'll get back to you shortly.</h4>
                            <form className="appointment-form" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <button type="submit">Book Appointment</button>
                            </form>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </main>
            <ToastContainer />
            <Footer />
        </>
    );
};

export default DoctorPage;
