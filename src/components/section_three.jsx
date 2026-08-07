import forbesWidget from '../assets/images/forbes.jpg'
import { motion } from "motion/react"

export default function Section_Three({ isActive }) {
    return (
        <div id="page3" data-anchor="page3" className="section section-3"> 
            <div className="section-content">
                <div className="section-container page-3-section-container">
                    <div className="page-3-intro">
                        <motion.div className="page-3-subtitle-top"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <p>About me</p> 
                        </motion.div>
                        <motion.div className="page-3-display-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <h3>Ishka Villacisneros</h3>
                            <h3>accepted into Forbes Finance Council</h3>
                        </motion.div> 
                        <motion.div className="cotent-txt"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <p>Monrovia, CA, January 27, 2022 — Ishka Villacisneros, has been accepted into Forbes Finance Council, an invitation-only community for executives in accounting, financial planning, wealth and asset management, and investment firms.</p>
                        </motion.div>
                        <motion.div className="page-3-btn"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            <a href="https://californila.com/blogs/news/ishka-villacisneros-accepted-into-forbes-finance-council" className="forbes-link" target='_blank'>
                                Read more
                            </a>
                        </motion.div>
                    </div>
                    <motion.div className="forbes-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <img src={forbesWidget} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}