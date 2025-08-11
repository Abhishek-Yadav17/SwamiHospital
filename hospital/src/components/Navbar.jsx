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
                <div className="nav2">
                    {['Home', 'About', 'Services', 'Team', 'Contact'].map((item) => (
                        <h4
                            key={item}
                            className="nav-item"
                            onClick={() =>
                                (window.location.href = item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                            }
                        >
                            {item}
                        </h4>
                    ))}
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar