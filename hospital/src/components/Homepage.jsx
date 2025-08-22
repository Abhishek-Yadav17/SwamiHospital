import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Homepage.scss'

const Homepage = () => {

    const [hoverIndex, setHoverIndex] = useState(null);
    const [isDetailsHovered, setDetailsHovered] = useState(false);
    const showDetails = hoverIndex !== null || isDetailsHovered;

    const backgroundImages = ['/ent.jpg', '/dentistry.jpg', '/facialaesthetics.jpg', '/fps.jpg'];
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

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

    return (
        <>
            <Navbar />
            <main>
                <div className="hero">
                    {backgroundImages.map((img, i) => (
                        <div
                            key={i}
                            className={`hero-bg ${i === currentBgIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
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
                        Facial Aesthetic solutions by expert Surgeons, Dentists, Cosmetologists & Psychologists — devoted to enhancing self-esteem.
                    </motion.h4>

                    <motion.div 
                        className="hero-mid"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <motion.button
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                            }}
                            onClick={() => {
                                window.location.href = `/team`;
                            }}
                        >
                            Meet Our Experts<i class="ri-arrow-right-up-line"></i>
                        </motion.button>

                        <motion.button
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                            }}
                            onClick={() => {
                                window.location.href = `/contact`;
                            }}
                        >
                            Book your slot now<i class="ri-arrow-right-up-line"></i>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="hero-buttons"
                        onMouseLeave={() => {
                            setHoverIndex(null);
                            setDetailsHovered(false);
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
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
                                <img src="/building.jpg" alt="" />
                            </motion.div>
                        </div>
                    </motion.div>

                </motion.div>

            </main >
            <a
                href="https://wa.me/919135271616"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="ri-whatsapp-fill"></i>
            </a>
            <Footer />
        </>
    )
}

export default Homepage