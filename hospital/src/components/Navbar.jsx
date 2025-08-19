import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Navbar.scss';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <motion.nav
            className={menuOpen ? 'open' : ''}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <img src="/swami.png" alt="logo" className='logo' />
            <img src="/logo.png" alt="logo" />
            <div className="nav2">
                {['Home', 'Services', 'About', 'Team'].map((item) => (
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
                <motion.button
                    className="cb"
                    onClick={() => (window.location.href = '/contact')}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
                    }}
                >
                    Contact
                </motion.button>
                <i className="ri-menu-3-line" onClick={handleToggle}></i>
            </div>
        </motion.nav>
    );
};

export default Navbar;
