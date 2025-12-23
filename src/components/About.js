import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import '../styles/sections.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const x1 = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [-250, 0, 0, 250]);
    const x2 = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [200, 0, 0, -200]);
    const x3 = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [-200, 0, 0, 200]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section className="section" id="about" ref={ref} style={{ minHeight: 'auto' }}>
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
            >
                ABOUT ME
            </motion.h2>


            <div className="statement-container">
                <motion.div style={{ x: x1 }} className="statement-text">
                    I create responsive, high-quality interfaces.
                </motion.div>
                <motion.div style={{ x: x2 }} className="statement-text">
                    I focus on strong design and careful attention to detail.
                </motion.div>
                <motion.div style={{ x: x3 }} className="statement-text">
                    I deliver quickly while understanding requirements clearly.
                </motion.div>
            </div>

            <motion.div
                className="content-container about-grid"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div className="about-text glass-card" variants={itemVariants}>
                    <h3 style={{ color: '#bdb8b2', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>BIO</h3>
                    <p>
                        Goal-oriented and highly motivated technology professional with hands-on experience in web development, frontend design, and search engine optimization (SEO).
                    </p>
                    <p>
                        Skilled in HTML, CSS, JavaScript, Bootstrap, and low-code/no-code platforms for building responsive and user-friendly websites.
                    </p>
                    <p>
                        Passionate about Prompt Engineering and studying the behavior of Large Language Models with varied input prompts.
                    </p>
                </motion.div>

                <motion.div className="education-list" variants={itemVariants}>
                    <h3 style={{ color: '#bdb8b2', marginBottom: '1.5rem', marginTop: '3rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Education</h3>

                    <div className="edu-item">
                        <span className="edu-degree">B.Tech (Information Technology)</span>
                        <span className="edu-inst">MLR Institute of Technology, Hyderabad | CGPA: 8.46</span>
                        <span className="edu-year">2023-2027</span>
                    </div>

                    <div className="edu-item">
                        <span className="edu-degree">Class XII</span>
                        <span className="edu-inst">Telangana State Board | 97.5%</span>
                        <span className="edu-year">2023</span>
                    </div>

                    <div className="edu-item">
                        <span className="edu-degree">Class X</span>
                        <span className="edu-inst">CBSE | 88%</span>
                        <span className="edu-year">2020</span>
                    </div>


                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
