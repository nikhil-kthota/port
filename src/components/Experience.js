import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/sections.css';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section" id="experience" ref={ref} style={{ minHeight: 'auto' }}>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
                style={{ width: '100%' }}
            >
                <motion.h2
                    className="section-title"
                    initial={{ scale: 0.9 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                >
                    EXPERIENCE
                </motion.h2>

                <div className="content-container">
                    <motion.div
                        className="glass-card"
                    // Removed individual initial/animate to let parent control or stagger
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-main)', margin: 0 }}>Websites Factory</h3>
                            <span style={{ color: 'var(--color-text-muted)', fontFamily: 'monospace' }}>April 2020 - May 2021</span>
                        </div>

                        <h4 style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontWeight: 500 }}>Frontend Developer Intern</h4>

                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-main)', lineHeight: '1.6' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex' }}>
                                <span style={{ color: 'var(--color-text-muted)', marginRight: '10px' }}>▹</span>
                                Designed and developed the frontend of 100+ websites using HTML, CSS, and Bootstrap based on client specifications.
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex' }}>
                                <span style={{ color: 'var(--color-text-muted)', marginRight: '10px' }}>▹</span>
                                Improved website rankings and traffic as an SEO engineer through keyword optimization and on-page SEO strategies.
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex' }}>
                                <span style={{ color: 'var(--color-text-muted)', marginRight: '10px' }}>▹</span>
                                Led the development of the company's main website with a focus on responsive design and user-friendly UI.
                            </li>
                        </ul>

                        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {['HTML', 'CSS', 'Bootstrap', 'SEO', 'WordPress'].map((tech, i) => (
                                <span key={i} style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '5px 10px',
                                    fontSize: '0.8rem',
                                    color: 'var(--color-text-main)'
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
