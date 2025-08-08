import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.scss'

const Navbar = () => {

    const [hovered, setHovered] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img src="/swami.png" alt="logo" className='logo' />
                <img src="/logo.png" alt="logo" />
                <motion.div
                    className="nav2"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    animate={{ width: hovered ? 520 : 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <AnimatePresence>
                        {!hovered && (
                            <motion.h4
                                className="menu"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                Menu
                            </motion.h4>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {hovered && (
                            <>
                                {['Home', 'About', 'Services', 'Team', 'Contact'].map((item, i) => (
                                    <motion.h4
                                        key={item}
                                        className="nav-item"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5, delay: i * 0.05 }}
                                        onClick={() => window.location.href = item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    >
                                        {item}
                                    </motion.h4>
                                ))}
                            </>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.nav>
        </>
    )
}

export default Navbar