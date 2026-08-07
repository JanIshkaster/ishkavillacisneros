import bobaBoxLogo from '../assets/images/logos/bobaBoxLogoWebResized.png'
import californiaLogo from '../assets/images/logos/californilaLogo-370-x-300.png'
import ishkasterLogo from '../assets/images/logos/ishkasterlogo.png'
import misenkaLogo from '../assets/images/logos/Misenka-LA-Logo-V1-01-1-1.png'  
import pinoytownhallLogo from '../assets/images/logos/pinoytownhall-logo.png'
import sssLogo from '../assets/images/logos/SSS-Logo.png'
import { motion } from "motion/react"

const logos = [
  { src: bobaBoxLogo, alt: 'Boba Box' },
  { src: californiaLogo, alt: 'California' },
  { src: ishkasterLogo, alt: 'Ishkaster' },
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
                                <img src={logo.src} alt={logo.alt} className="brand-logo" />
                            </motion.div> 
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}