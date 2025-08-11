import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/ENT.scss';

const ENT = () => {
    return (
        <>
            <Navbar />
            <main>
                <motion.div
                    className="ent"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="ent-heading">
                        <h1>ENT Department</h1>
                        <h4>Comprehensive care for Ear, Nose, Throat, Head & Neck</h4>
                    </div>

                    <div className="ent-content">
                        <div className="ent-section">
                            <h2>EAR</h2>
                            <ul>
                                <li>
                                    <strong>Oto Endoscopy and Suction Irrigation</strong>
                                    <h4>Examination of ear canal, tympany membrane and middle your structures using camera of any pathological infection wax fungus for a body under vision of the endoscope.</h4>
                                    <div className="ent-images">
                                        <img src="/ear1.jpg" alt="ent" />
                                    </div>
                                </li>
                                <li>
                                    <strong>Foreign Body Removal</strong>
                                    <h4>Endoscopic removal of any foreign body like insect, plastic or metallic bead, etc.</h4>
                                </li>
                                <li>
                                    <strong>Myringotomy</strong>
                                    <h4>A minor office procedure wherein fluid pressure in the middle ear is relieved by a planned surgical incision on tympanic membrane. Done in cases of otitis media with effusion, acute otitis media  presenting in the form of ear blockage and ear pain.</h4>
                                    <div className="ent-images">
                                        <img src="/ear2.jpg" alt="ent" />
                                    </div>
                                </li>
                                <li>
                                    <strong>Myringotomy with Grommet</strong>
                                    <h4>Grommet is a biologically inert ventilation tube placed in tympanic membrane to maintain ventilation from upper respiratory tract to the middle year to the external environment in cases of gross mucopurulent ear discharge.</h4>
                                    <div className="ent-images">
                                        <img src="/ear3.jpg" alt="ent" />
                                        <img src="/ear4.jpg" alt="ent" />
                                    </div>
                                </li>
                                <li>
                                    <strong>Tympanoplasty</strong>
                                    <h4>Tympanoplasty is a surgical procedure to repair the central perforation of a membrane.
                                        It is indicated in a case of traumatic CP or in a case of chronic ortitis media.
                                        It also includes inspection of the oscicular chain mobility.</h4>
                                    <div className="ent-images">
                                        <img src="/ear7.jpg" alt="ent" />
                                        <img src="/ear8.jpg" alt="ent" />
                                    </div>
                                </li>
                                <li>
                                    <strong>Mastoidectomy</strong>
                                    <h4>This is a surgical procedure where middle ear cavity and mastoid cavity is cleared of all its infection to provide a lifelong dry ear. </h4>
                                    <div className="ent-images">
                                        <img src="/ear6.jpg" alt="ent" />
                                        <img src="/ear5.jpg" alt="ent" />
                                    </div>
                                </li>
                                <li>
                                    <strong>Stapedotomy</strong>
                                    <h4>This is a surgical procedure where the fixed ossicular chain (most commonly due to otosclerosis at the footplate of stapes) is made mobile so that there is improvement in conductive hearing of the patient.</h4>
                                </li>
                                <li>
                                    <strong>Cochlear Implant</strong>
                                    <div className="desc">
                                        <h4>Hearing disability in the newborns is most commonly due to loss of the haircell receptors in the region of cochlea or morphological defect in  cochlea.</h4>
                                        <h4>After thorough investigations including OAE and BERA and other audiological evaluation, Radiological Scans including HRCT Temporal Bone, a good candidate for surgical procedure is to be decided so that hearing improvement is made possible through a surgical procedure where electrode is placed inside the cochlea for a lifelong normal hearing. PostSurgical follows and sharing rehabilitation is advised for an early recovery.</h4>
                                    </div>
                                </li>
                                <li>
                                    <strong>Pinnaplasty</strong>
                                    <h4>A surgical procedure to modify and beautify the shape of external ear that is the pinna.</h4>
                                </li>
                            </ul>
                        </div>

                        <div className="ent-section">
                            <h2>NOSE</h2>
                            <ul>
                                <li>
                                    <strong>Nasal Cautery for Allergy / Epistaxis</strong>
                                    <h4>
                                        Chronic rhinitis, or Epistaxis (Bleeding Through Nose) can be treated with chemical / thermal Cautery. It is an office procedure done using nasal endoscope.
                                    </h4>
                                    <div className="ent-images">
                                        <img src="/nose1.jpg" alt="nose" />
                                    </div>
                                </li>
                                <li>
                                    <strong>Septoplasty</strong>
                                    <h4>
                                        Surgical correction of deviated nasal septum. Symptoms of deviated nasal septum are unilateral nasal blockage, obstructive sleep apnea, daytime sleepiness, undue tiredness.
                                    </h4>
                                    <div className="ent-images">
                                        <img src="/nose2.jpg" alt="nose" />
                                    </div>
                                </li>
                                <li>
                                    <strong>Turbinoplasty</strong>
                                    <h4>
                                        Nasal cavity consists of three turbinates on each side of the septum. Many of the allergic and functional problems are due to hypertrophied inferior turbinates which might require surgical correction to provide symptomatic relief.
                                    </h4>
                                    <div className="ent-images">
                                        <img src="/nose3.jpg" alt="nose" />
                                    </div>
                                </li>
                                <li>
                                    <strong>Conchoplasty</strong>
                                    <h4>
                                        Concha is a pneumatized middle turbinate. Undue pneumatization of which might cause obstructive as well as pressure-pain like symptoms. Such condition often requires surgical treatment.
                                    </h4>
                                    <div className="ent-images">
                                        <img src="/nose4.jpg" alt="nose" />
                                    </div>
                                </li>
                                <li>
                                    <strong>Rhinoplasty</strong>
                                    <h4>
                                        Any deformity/deviation/asymmetry of the external nose can be an aesthetic issue to anyone. Nose is the foremost aesthetically significant organ of facial region and thus many people seek Rhinoplasty to enhance external beauty.
                                    </h4>
                                    <div className="ent-images">
                                        <img src="/nose5.jpg" alt="nose" />
                                        <img src="/nose8.jpg" alt="nose" />
                                    </div>
                                </li>
                                <li>
                                    <strong>FESS</strong>
                                    <div className="desc">
                                        <h4>It is an abbreviation for functional endoscopic sinus surgery.</h4>
                                        <h4>This surgery is indicated in patients suffering from chronic / acute sinusitis. </h4>
                                        <h4>Para nasal sinuses our air filled hollow cavities in the facial bones whose function is minimizing the weight of head, resonating the sound of our voice, humidification of the air inhaled through nose. Any structural/functional obstruction of the sinuses, or bacterial / fungal infection can be an indication of FESS. Also, development of polyps due to chronic rhinosinusitis might require FESS as the end treatment.</h4>
                                    </div>
                                    <div className="ent-images">
                                        <img src="/nose7.jpg" alt="nose" />
                                        <video src="/nose6.mp4" autoPlay loop muted />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="ent-section">
                            <h2>THROAT</h2>
                            <ul>
                                <li>
                                    <strong>Tonsillectomy</strong>
                                    <div className="desc">
                                        <h4>Tonsils are lymphoid tissues in the oral cavity, mainly palatine tonsils near the base of the tongue.</h4>
                                        <h4>They protect the body from infections entering through air or food.</h4>
                                        <h4>In some, especially children, they get chronically infected causing recurrent throat infections.</h4>
                                        <h4>Medical treatments like antibiotics often don't provide long-term relief.</h4>
                                        <h4>Such patients may require surgical removal of the infected tonsils.</h4>
                                    </div>
                                    <div className="ent-images">
                                        <img src="/throat1.jpg" alt="throat" />
                                    </div>
                                </li>
                                <li>
                                    <strong>Adenoidectomy</strong>
                                    <div className="desc">
                                        <h4>Adenoid is a lymphoid mass on the posterior wall of the nasopharynx.</h4>
                                        <h4>Recurrent infections can cause adenoid hypertrophy, leading to mouth breathing, snoring, and recurrent rhinitis.</h4>
                                        <h4>Medical treatment includes topical steroid sprays plus antihistamines or antibiotics.</h4>
                                    </div>
                                    <div className="ent-images">
                                        <img src="/throat2.jpg" alt="throat" />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="ent-section">
                            <h2>LARYNX</h2>
                            <ul>
                                <li>
                                    <strong>MicroLaryngoscopy</strong>
                                    <h4>
                                        Any abnormality in the voice box or vocal cords can be treated with this procedure.
                                    </h4>
                                    <div className="ent-images">
                                        <img src="/lyrax.jpg" alt="larynx" />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="ent-section">
                            <h2>HEAD AND NECK</h2>
                            <ul>
                                <li>
                                    <strong>Neck Node Biopsy</strong>
                                    <h4>
                                        It is done to check the nature of pathology causing swelling in the lymph nodes of cervical / neck region.
                                    </h4>
                                </li>
                                <li>
                                    <strong>Parotidectomy</strong>
                                    <h4>
                                        This is a surgical excision of Parotid Gland in case of Acute/Chronic Parotitis, Parotid Duct Stones or Mass Lesions etc.
                                    </h4>
                                    <div className="ent-images">
                                        <img src="/headnneck1.jpg" alt="headnneck" />
                                    </div>
                                </li>
                                <li>
                                    <strong>Submandibular Gland Excision</strong>
                                    <h4>
                                        It is surgical removal of Submandibular Gland in cases of Chronic Infection, Or Stones in The Ducts of the Gland Or Mass Lesions.
                                    </h4>
                                </li>
                                <li>
                                    <strong>Thyroidectomy</strong>
                                    <h4>
                                        The Surgical removal of Thyroid Gland done in case of Infection, Or Nodular Lesions, or Suspected Cancer of Thyroid.
                                    </h4>
                                    <div className="ent-images">
                                        <img src="/headnneck2.jpg" alt="headnneck" />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="ent-section">
                            <h2>AUDIOLOGY & SPEECH</h2>
                            <p><strong>We have the services available for evaluation of hearing which include following tests :</strong></p>
                            <ul>
                                <li>
                                    Pure Tone Audiometry
                                    <div className="ent-images">
                                        <img src="/audio1.jpg" alt="audio" />
                                    </div>
                                </li>
                                <li>
                                    Impedence Test
                                    <div className="ent-images">
                                        <img src="/audio2.jpg" alt="audio" />
                                    </div>
                                </li>
                                <li>
                                    OAE
                                    <div className="ent-images">
                                        <img src="/audio3.jpg" alt="audio" />
                                    </div>
                                </li>
                                <li>
                                    BERA
                                    <div className="ent-images">
                                        <img src="/audio4.jpg" alt="audio" />
                                    </div>
                                </li>
                            </ul>
                            <p><strong>We also provide hearing aids:</strong></p>
                            <div className="hearing-images">
                                <img src="/audio5.jpg" alt="audio" />
                                <img src="/audio6.jpg" alt="audio" />
                            </div>
                            <ul>
                                <li>Behind The Ear</li>
                                <li>Receiver In The Canal</li>
                                <li>Completely In Canal</li>
                                <li>Invisible In Canal</li>
                            </ul>
                        </div>

                        <div className="ent-section">
                            <h2>ALLERGY TREATMENT</h2>
                            <ul>
                                <li>
                                    <h4>We diagnose and treat all kinds of allergic conditions related to ENT.</h4>
                                    <div className="ent-images">
                                        <img src="/aid.jpg" alt="aid" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </>
    );
};

export default ENT;
