import bobaBoxLogo from '../assets/images/logos/BobaBoxLogo.webp'
import californiaLogo from '../assets/images/logos/CalifornilaLogo.webp'
import iMediaIdeasLogo from '../assets/images/logos/IM-Logo-Red-01-v3.webp'
import misenkaLogo from '../assets/images/logos/Misenka-LA-Logo-V1-01-1-1.webp'  
import pinoytownhallLogo from '../assets/images/logos/PTHLOGO.webp'
import sssLogo from '../assets/images/logos/SSS-Logo.webp'
import { motion } from "motion/react"

const logos = [
  { src: bobaBoxLogo, alt: 'Boba Box' },
  { src: californiaLogo, alt: 'California' },
  { src: iMediaIdeasLogo, alt: 'Ishkaster' },
  { src: misenkaLogo, alt: 'Misenka LA' },
  { src: pinoytownhallLogo, alt: 'Pinoy Townhall' },
  { src: sssLogo, alt: 'SSS' },
]

export default function Section_two({ isActive }) {
    return (
        <>
            <div id="page2" data-anchor="page2" className="section section-2">
                <div className="section-content">
                    <div className="logo-grid">
                        {logos.map((logo, index) => (
                            <motion.div className='logo-container' 
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{
                                    duration: 0.8, 
                                    stiffness: 100,
                                    delay: index * 0.2,
                                }}
                            >
                                <img src={logo.src} alt={logo.alt} className="brand-logo" loading="lazy" width="370" height="300" />
                            </motion.div> 
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}