import React from 'react';
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/DoctorPage.scss'

const DoctorPage = () => {
    const { doctorId } = useParams();

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
                            className="doctor-left"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src="/about1.webp" alt="doctor" />
                        </motion.div>
                        <motion.div
                            className="doctor-right"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p>Role of doctor</p>
                            <h1>{doctorId.replace(/-/g, ' ')}</h1>
                            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, expedita, asperiores labore magnam consequuntur, a animi incidunt nam sint quam culpa inventore? Quod sapiente, aspernatur doloremque nihil magni error expedita veniam, ut praesentium cumque inventore placeat. Doloribus accusantium labore expedita!</h4>
                            <div className="buttons">
                                <button><i className="ri-phone-fill"></i> +123456789</button>
                            </div>
                            <div className="socials">
                                <h5>Socials:</h5>
                                <i className="ri-facebook-fill"></i>
                                <i className="ri-twitter-x-fill"></i>
                                <i className="ri-instagram-fill"></i>
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
                                <h2>About {doctorId.replace(/-/g, ' ')}</h2>
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima nulla eveniet veritatis quo tenetur delectus eos sint, illo facere laudantium similique numquam exercitationem, sequi soluta itaque. Ut odio unde magnam? Totam nihil aliquid repellat, iste unde magnam laudantium voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, deserunt exercitationem. Earum vero alias perferendis sint doloribus fugit nam necessitatibus?</h4>
                            </div>
                            <div className="doctors-bottom-inner">
                                <h2>Education and Training</h2>
                                <h4><span>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. A minima nulla eveniet veritatis quo tenetur delectus eos sint, illo facere laudantium similique numquam exercitationem, sequi soluta itaque. Ut odio unde magnam? Totam nihil aliquid</h4>
                                <h4><span>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. A minima nulla eveniet veritatis quo tenetur delectus eos sint, illo facere laudantium similique numquam exercitationem, sequi soluta itaque. Ut odio unde magnam? Totam nihil aliquid</h4>
                            </div>
                            <div className="doctors-bottom-inner">
                                <h2>Services Provided</h2>
                                <ul>
                                    <li>Routine Check-ups</li>
                                    <li>Cleanings and Fluoride Treatments</li>
                                    <li>Oral Hygiene Instruction</li>
                                    <li>Early Orthodontic Evaluation</li>
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
