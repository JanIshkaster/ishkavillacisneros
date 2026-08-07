import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoLogoDribbble, IoLogoFacebook, IoLogoYoutube, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io"; 

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: "Home", href: "#page1" },
        { label: "About", href: "#page2" },
        { label: "Blogs", href: "#page3" },
        { label: "Contact", href: "#page6" },
    ];

    return (
        <>
        <div className="header-burger-menu">
            {/* Burger Button */}
            <button
                className={`burger-button ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Background Overlay */}
                        <motion.div
                            className="menu-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu */}
                        <motion.nav
                            className="side-menu"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                            }}
                        >

                            <div className="burger-menu-container">
                                <ul>
                                    {menuItems.map((item, index) => (
                                        <motion.li key={item.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}  
                                            transition={{
                                            duration: 0.8, 
                                            stiffness: 100,
                                            delay: index * 0.2,
                                        }}
                                        >
                                            <a
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.label}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="social-footer">
                                    <motion.div className="social-list social-list-menu"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    > 
                                        <a target="_blank" href="https://www.facebook.com/ishkavillacisneros" className="icon social-facebook">
                                            <IoLogoFacebook size={20} />
                                        </a>
                                        <a target="_blank" href="https://www.instagram.com/ishkavilla" className="icon social-instagram">
                                            <IoLogoInstagram size={20} />
                                        </a>
                                        <a target="_blank" href="https://www.youtube.com/@ishka0220" className="icon social-youtube">
                                            <IoLogoYoutube size={20} />
                                        </a>
                                        <a target="_blank" href="https://www.linkedin.com/in/ishkavillacisneros/" className="icon social-linkedin">
                                            <IoLogoLinkedin size={20} />
                                        </a> 
                                    </motion.div>

                                    <motion.div className="copyright"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.8 }}
                                    > 
                                        <p>© Ishkaster {new Date().getFullYear()}</p>
                                    </motion.div>
                                </div>

                            </div>

                        </motion.nav>


                    </>
                )}
            </AnimatePresence>
 
        </div>

        </>
    );
}