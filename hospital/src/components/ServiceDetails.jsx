import React from 'react';
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/ServiceDetails.scss'

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const formattedTitle = serviceId.replace(/-/g, ' ');

    return (
        <>
            <Navbar />
            <main>
                <motion.div
                    className="service-details"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.h1
                        variants={{
                            hidden: { y: -50, opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
                        }}
                    >
                        {formattedTitle}
                    </motion.h1>

                    <motion.h4
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.6 } }
                        }}
                    >
                        Add your service details here for {formattedTitle}
                    </motion.h4>

                    <motion.div
                        className="service-card-details"
                        variants={{
                            hidden: { y: 60, opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
                        }}
                    >
                        <img src="/about1.webp" alt="service" />
                    </motion.div>

                    <motion.div
                        className="service-about"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        <motion.h4
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.6 } }
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione iste consequuntur delectus natus nemo velit fuga et labore possimus quo blanditiis quis, est quod id, ipsa debitis illo perspiciatis. Veniam, sapiente mollitia alias amet ut, magnam repellendus voluptas atque a ex pariatur dolor eos eveniet, fugit eum praesentium recusandae id voluptatibus quasi aliquid assumenda temporibus aliquam! Quae quos, recusandae obcaecati ut tempora, temporibus qui totam similique quaerat quibusdam itaque perspiciatis.
                        </motion.h4>

                        <motion.h2
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
                            }}
                        >
                            Benefits of {formattedTitle}
                        </motion.h2>

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

                        <div className="service-about-inner">
                            <motion.div
                                className="service-about-inner-left"
                                variants={{
                                    hidden: { x: -80, opacity: 0 },
                                    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
                                }}
                            >
                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minus, perspiciatis hic vero assumenda numquam reiciendis. Dolores, optio vitae iusto dolor tenetur libero, blanditiis pariatur inventore dolore unde tempora sint aperiam ipsam corrupti consequuntur!</h3>
                                <div className="service-list-columns">
                                    <ul>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                    </ul>
                                    <ul>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                        <li>Lorem, ipsum.</li>
                                    </ul>
                                </div>
                                <button>Book Now</button>
                            </motion.div>

                            <motion.div
                                className="service-about-inner-right"
                                variants={{
                                    hidden: { x: 80, opacity: 0 },
                                    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
                                }}
                            >
                                <img src="/about1.webp" alt="about" />
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </main>
            <Footer />
        </>
    );
};

export default ServiceDetails;
