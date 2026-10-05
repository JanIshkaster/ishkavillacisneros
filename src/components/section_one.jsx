import sectionOneBg from '../assets/images/Maam-Ishka-Banner-01.jpg'
import { motion } from "motion/react"

export default function Section_one() {
    return (
        <div id="page1" data-anchor="page1" className="section section-1">
            <div className="section-background" style={{ backgroundImage: `url(${sectionOneBg})` }}></div>
            <div className="section-content">
                <div className="section-container">
                    <div className="intro">
                        {/* <motion.div className="subtitle-top"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <p>Welcome to</p>
                            <p>Ishka Villacisneros</p>
                        </motion.div> */}
                        <motion.div className="display-text"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                        <h1>
                            Hi, I'm <span className="display-highlight-text">Ishka</span>.
                        </h1>
                        </motion.div>
                        <motion.div className="hr-bottom"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        ></motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}