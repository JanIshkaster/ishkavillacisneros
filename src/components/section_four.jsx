import { allPosts } from '../assets/content-data/content';
import { motion } from "motion/react"

export default function Section_Four({isActive}) {   

    return (
        <div id="page4" data-anchor="page4" className="section section-4 pp-scrollable"> 
            <div className="section-content">
                <div className="section-container page-4-section-container">
                    <div className="blog-grid">
                        {allPosts.map((post, index) => (
                        <motion.div key={index} className="blog-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{
                                duration: 0.8, 
                                stiffness: 100,
                                delay: index * 0.2,
                            }}
                        >
                            <div className="blog-card-img">
                                <img src={post.featured_media_src_url} alt={post.title} className="blog-card-image" />
                            </div>  
                            <div className="blog-card-content"> 
                                <h3 className="blog-card-title">{post.title}</h3>
                                <a href={post.date} target='_blank' className="blog-card-link">Read more</a>
                                <span className="blog-card-date">
                                    {post.date
                                        ? new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })
                                        : ''}
                                </span>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}