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
            title: "Ear Nose Throat",
            sections: [
                {
                    sectionTitle: "Ear Treatments",
                    items: [
                        "Endoscopy with Suction Irrigation", "Foreign Body Removal", "Ear Biopsy",
                        "Microscopy", "Myringotomy", "Myringotomy with Gromet",
                        "Pinnaplasty", "Miringoplasty", "Tympanoplasty",
                        "Mastoidectomy", "Stapedotomy", "Cochlear Implant"
                    ]
                },
                {
                    sectionTitle: "Nose Treatments",
                    items: [
                        "Nasal Cautery For Allergy", "Septoplasty", "Turbinoplasty / Conchoplasty",
                        "Rhinoplasty", "Anterior FESS", "Total FESS (Sinus Surgery)",
                        "Foreign Body Removal", "Nasal Bone Fracture Repair", "Nasal Polypectomy",
                        "Nasal Hemangioma Removal", "Juvenile Nasapharyngeal Angiofibroma", "Nasal Biospy"
                    ]
                },
                {
                    sectionTitle: "Throat Treatments",
                    items: [
                        "Oral Biospy", "Tonsilectomy", "Adenoidectomy Resection",
                        "Tonsil & Adenoid Tar", "Peritonsillar Abscess / Quinsy Drainage", "Uvuloplasty",
                        "Uvulopalatoplasty", "Tongue Tie Release", "Laryngoscopy",
                        "Miscrolaryngoscopy"
                    ]
                },
                {
                    sectionTitle: "Head & Neck Surgery",
                    items: [
                        "Neck Node Biospy", "Superficial Parotidectomy", "Total Parotidectomy",
                        "Submandibular Gland Excision", "Hemithyroidectomy", "Total Thyroidectomy",
                        "Thyroglossal Cyst Excision", "Dermoid/sebaceous Cyst Excision",
                        "Ludwig's Angina", "Neck Space Abscess I & D",
                        "Ranula Excision"
                    ]
                }
            ],
            extra: {
                sectionTitle: "Audio and Speech Unit",
                subSections: [
                    {
                        title: "Digital Hearing Aid",
                        items: [
                            "Behind The Ear (BTE)", "Reciever in Canal (RIC)",
                            "Completely In Canal (CIC)", "Invisible In Canal (IIC)"
                        ]
                    },
                    {
                        title: "Allergy Treatment",
                        items: [
                            "Allergy Profile Blood Tests", "Anti Allergy Immunotherapy"
                        ]
                    }
                ]
            }
        },

        {
            title: "Dentistry",
            items: [
                "Scaling", "Tooth Extraction", "Composite", "Root Canal",
                "GICC", "Cown Bridge", "Dental Implant", "Flap Surgery",
                "Laminate", "Veneers", "Bleach",
                "De-Pigmentation", "Ortho (Braces)", "Night Guard", "Retainer", "Pediatric Dentistry"
            ],
            sections: [
                {
                    sectionTitle: "Aesthetic Dentistry",
                    items: ["Smile Design", "Dental Jewellery", "Teeth Whitening", "Gummy Smile Treatment"]
                },
                {
                    sectionTitle: "Treatment",
                    items: ["Lichen Planus", "Mouth Ulcer", "Glossitis", "Osmf", "Leucoplakia", "Hallitosis"]
                }
            ]
        },

        {
            title: "Facial Aesthetics",
            items: [
                "Dermascopy Skin & Hair Analysis", "Hydrafacial", "Dermaplanning",
                "Chemical Peel", "LED Light Therapy", "Crystal Therapy",
                "Mesotherapy", "Derma Roller", "Microneedling", "Acne & Scar Treatment", "PRP", "Hair Transplant", "Botox",
                "Laser Hair Reduction", "Tattoo Removal", "Scar Removal", "Beard Patch Treatment", "Pigmentation-depigmentation",
                "All kind of Hair Treatment"
            ]
        },

        {
            title: "Facial Plastic Surgery",
            items: [
                "Rhinoplasty", "Blepharoplasty", "Implants and Prosthesis",
                "Pinnaplasty", "Brow Lift / Forehead Lift", "Facial Reanimation",
                "Genioplasty", "Facelift / Necklift", "Botox, Fillers, PMU"
            ]
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
                    <motion.div
                        className="hero-heading"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.button
                            className="contact-button"
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
                            }}
                        >
                            <i className="ri-phone-fill"></i>+91 9135321616
                        </motion.button>

                        <motion.h2
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        >
                            सुहास्य वदनं सर्व सुखस्य कारणं
                        </motion.h2>

                        <motion.button
                            className="contact-button"
                            variants={{
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
                            }}
                        >
                            <i className="ri-mail-fill"></i>swamisclinic100@gmail.com
                        </motion.button>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    Sculpting Identity Through Beauty
                </motion.h1>

                <motion.h4
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    We, at <span>Swami's Clinic</span> are dedicated to provide healthcare services related to <span>Ear, Nose, Throat Facial Cosmetics & Dentistry</span> with our team of experts.

                    We also help people with brief and thorough counselling sessions who struggle with selfworth / self esteem seeking <span>Cosmetic treatments</span>.
                </motion.h4>

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
                            onClick={() => window.location.href = `/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                            {service.title.split(' ').map((w, idx) => (
                                <div key={idx}>{w}</div>
                            ))}
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
                        <motion.div key={hoverIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                            <h2>{services[hoverIndex]?.title}</h2>

                            {services[hoverIndex]?.title === "Ear Nose Throat" && (
                                <div className="ent-grid">
                                    <div className="services-grid">
                                        {services[hoverIndex].sections.map((section, sectionIndex) => (
                                            <div key={sectionIndex} className="service-section">
                                                <h3>{section.sectionTitle}</h3>
                                                <ul>
                                                    {section.items.map((item, itemIndex) => (
                                                        <li key={itemIndex}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="ent-extra">
                                        <h3>{services[hoverIndex]?.extra?.sectionTitle}</h3>
                                        {services[hoverIndex]?.extra?.subSections.map((sub, idx) => (
                                            <div key={idx} className="ent-sub-section">
                                                <h5>{sub.title}</h5>
                                                <ul>
                                                    {sub.items.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {["Facial Aesthetics", "Facial Plastic Surgery"].includes(services[hoverIndex]?.title) && (
                                <div className="grid-3x3">
                                    {services[hoverIndex].items.map((item, index) => (
                                        <div key={index} className="grid-item">{item}</div>
                                    ))}
                                </div>
                            )}

                            {services[hoverIndex]?.title === "Dentistry" && (
                                <div className="dentistry-grid">
                                    <ul>
                                        {services[hoverIndex].items.slice(0, 8).map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <ul>
                                        {services[hoverIndex].items.slice(8, 16).map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="dentistry-sectioned">
                                        {services[hoverIndex].sections.map((section, i) => (
                                            <div key={i}>
                                                <h3>{section.sectionTitle}</h3>
                                                <ul>
                                                    {section.items.map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                </motion.div>
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
                    <div className="about-inner">
                        <div className="about-inner-left">
                            <a
                                href="https://maps.app.goo.gl/aPGYrCZQY1wkQ1786"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'block' }}
                            >
                                <motion.iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.453684537361!2d73.9281296!3d18.5624652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c15098e671bd%3A0xb3c415cbefd73b1a!2sSWAMI'S%20ENT%20DENTAL%20%26%20COSMETIC%20CLINIC!5e0!3m2!1sen!2sin!4vXXXXXXXXXXX"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    variants={{
                                        hidden: { opacity: 0, y: -50 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                                    }}
                                    style={{ pointerEvents: 'none' }}
                                ></motion.iframe>
                            </a>

                            <motion.h4
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                                }}
                            >
                                <span>Address:</span> Office 202, 2nd floor Vedriti Building, <br />
                                Above Gajlaxmi Jwellers, Tata Guardroom Bus Stop, Nagar Road, Pune-14
                            </motion.h4>

                            <motion.div
                                className="about-inner-left-buttons"
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.button
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                                    }}
                                >
                                    <i class="ri-phone-fill"></i>+91 9135321616
                                </motion.button>

                                <motion.button
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                                    }}
                                >
                                    <i class="ri-mail-fill"></i>swamisclinic100@gmail.com
                                </motion.button>
                            </motion.div>
                        </div>

                        <motion.div
                            className="about-inner-right"
                            variants={{
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                            }}
                        >
                            <h1>....</h1>
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