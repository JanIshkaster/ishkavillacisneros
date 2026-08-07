import { allBlogPosts } from '../assets/content-data/content';
import { motion } from "motion/react"

export default function Section_Four({isActive}) {   

    return (
        <div id="page5" data-anchor="page5" className="section section-5 pp-scrollable"> 
            <div className="section-content">
                <div className="section-container page-5 -section-container">
                    <motion.div className="blog-grid"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{
                            duration: 0.8, 
                            stiffness: 100,
                            delay:  0.2,
                        }}
                    >
                        {allBlogPosts.map((post, index) => (
                        <div key={index} className="blog-card">
                            <div className="blog-card-img">
                                <img src={post.featured_media_src_url} alt={post.title} className="blog-card-image" />
                            </div>  
                            <div className="blog-card-content"> 
                                <h3 className="blog-card-title">{post.title}</h3>
                                <a href={post.link} target='_blank' className="blog-card-link">Read more</a>
                                <div className="card-footer">
                                    <span className="media-outlet">{post.media_outlet}</span>
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
                            </div>
                        </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}