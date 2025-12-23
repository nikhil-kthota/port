import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useInView } from 'framer-motion';
import '../styles/sections.css';
import '../styles/skills-guided.css';

const guidedSkills = [
    "Git", "SQL", "Java", "Python",
    "React.js", "JavaScript",
    "Machine Learning", "Prompt Engineering",
    "Software Testing", "Cloud Computing", "TypeScript",
    "MySQL", "NoSQL", "HTML", "CSS",
];

const GuidedSkillItem = ({ children }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center end", "center start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 0.1]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.25, 0.7]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
    const color = useTransform(scrollYProgress, [0.3, 0.5, 0.7], ["#444444", "#e5e2de", "#444444"]);


    const blurValue = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [4, 0, 4]);
    const filter = useMotionTemplate`blur(${blurValue}px)`;

    return (
        <motion.div
            ref={ref}
            className="guided-skill-item"
            style={{
                opacity,
                scale,
                rotateX,
                color,
                filter
            }}
        >
            {children}
        </motion.div>
    );
};

const Skills = () => {
    const ref = useRef(null);
    return (
        <section className="section" id="skills" ref={ref} style={{ minHeight: 'auto' }}>
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                SKILLS
            </motion.h2>

            <div className="skills-guided-container">
                {guidedSkills.map((skill, index) => (
                    <GuidedSkillItem key={index}>
                        {skill}
                    </GuidedSkillItem>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}
            >
            </motion.div>
        </section>
    );
};

export default Skills;
