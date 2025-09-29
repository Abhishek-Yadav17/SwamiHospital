import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; import { motion } from 'framer-motion'
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Contact.scss'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await fetch('https://swamihospital.onrender.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success('Message sent successfully!');
                setFormData({ name: '', phone: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch {
            toast.error('Error sending message. Please try again later.');
        }
    };

    return (
        <>
            <Navbar />
            <main>
                <motion.div
                    className="contact-us"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Let Us Know How Can We Help
                    </motion.h1>

                    <motion.h4
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Contact Us, WhatsApp Us, Mail Us or Meet In Person
                    </motion.h4>

                    <motion.div
                        className="contact-inner"
                    >
                        <motion.div
                            className="contact-inner-left"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { when: "beforeChildren", staggerChildren: 0.2 },
                                },
                            }}
                        >
                            <motion.h4
                                variants={{
                                    hidden: { opacity: 0, y: -50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.6 }}
                            >
                                You can get your query or feedback updated with us anytime. Our Coordinator will contact you soon.
                            </motion.h4>

                            <motion.div
                                className="contact-inner-left-content"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.2 } },
                                }}
                            >
                                {[
                                    { icon: "ri-mail-line", title: "Send Us Email", subtitle: "swamisclinic100@email.com" },
                                    { icon: "ri-map-pin-line", title: "Our Location", subtitle: "Pune, Maharashtra" },
                                    { icon: "ri-phone-line", title: "Call Us!", subtitle: "+91 9135321616" },
                                ].map(({ icon, title, subtitle }, i) => (
                                    <motion.div
                                        className="contact-inner-left-box"
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, x: -50 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <div className="icon-wrapper">
                                            <i className={icon}></i>
                                        </div>
                                        <div className="content-wrapper">
                                            <h2>{title}</h2>
                                            <h4>{subtitle}</h4>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <div className="contact-social-media">
                                <h4>Follow Us On!</h4>
                                <motion.div
                                    className="social-media"
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.2 } },
                                    }}
                                >
                                    {["ri-instagram-fill", "ri-facebook-fill", "ri-linkedin-fill", "ri-twitter-x-fill"].map((icon, i) => (
                                        <motion.i
                                            key={i}
                                            className={icon}
                                            variants={{
                                                hidden: { opacity: 0, x: -50 },
                                                visible: { opacity: 1, x: 0 },
                                            }}
                                            transition={{ duration: 0.4 }}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-inner-right"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />

                                <label htmlFor="phone">Phone Number</label>
                                <input id="phone" type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />

                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />

                                <label htmlFor="message">Leave us a message</label>
                                <textarea id="message" name="message" placeholder="Leave us a message" required value={formData.message} onChange={handleChange}></textarea>

                                <button type="submit">Submit</button>
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

export default Contact;
