import { useEffect } from 'react'
import { motion } from "motion/react"

export default function Section_six({isActive}) {

useEffect(() => {
    if (document.querySelector('script[data-wufoo]')) {
        return
    }

    const script = document.createElement('script')

    script.src = 'https://secure.wufoo.com/scripts/embed/form.js'
    script.async = true
    script.dataset.wufoo = 'true'

    script.onload = () => {
        try {
            const form = new window.WufooForm()

            form.initialize({
                userName: 'analytics',
                formHash: 'qozpaxa17cuur8',
                autoResize: true,
                height: '544',
                async: true,
                host: 'wufoo.com',
                header: 'show',
                ssl: true,
            })

            form.display()
        } catch (error) {
            console.error('Wufoo form failed:', error)
        }
    }

    document.body.appendChild(script)

    return () => {
        // Don't remove the script here.
        // Wufoo may still need it.
    }
}, [])

    return (
        <div id="page6" data-anchor="page6" className="section section-6 pp-scrollable">
            <div className="section-content">
                <div className="section-container page-6-section-container">
                    <div className="contact-section">
                        <motion.div className="contact-form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div id="wufoo-qozpaxa17cuur8">
                                Fill out my <a href="https://analytics.wufoo.com/forms/qozpaxa17cuur8">online form</a>.
                            </div>
                        </motion.div>
                        <div className="linkend-widget">
                            <motion.div className="container"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <div
                                    className="badge-base LI-profile-badge"
                                    data-locale="en_US"
                                    data-size="large"
                                    data-theme="dark"
                                    data-type="HORIZONTAL"
                                    data-vanity="ishkavillacisneros"
                                    data-version="v1"
                                >
                                    <a
                                    className="badge-base__link LI-simple-link"
                                    href="https://www.linkedin.com/in/ishkavillacisneros?trk=profile-badge"
                                    ></a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}