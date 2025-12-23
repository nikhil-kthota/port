import React from 'react';
import { Mail, Github, Linkedin, Smartphone } from 'lucide-react';
import '../styles/sections.css';

const Footer = () => {
    return (
        <footer id="contact" style={{
            backgroundColor: '#000',
            padding: '3rem 2rem',
            marginTop: '0',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="content-container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>


                <a
                    href="mailto:nikhilkthota@gmail.com"
                    className="glass-card"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        textDecoration: 'none',
                        color: 'var(--color-text-main)',
                        padding: '1rem 2rem',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '0',
                        maxWidth: '400px',
                        width: '100%',
                        justifyContent: 'center'
                    }}
                >
                    <Mail size={20} />
                    <span style={{ fontSize: '1.1rem' }}>Write to me</span>

                </a>


                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a
                        href="https://github.com/nikhil-kthota"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                    >
                        <Github size={20} />
                        <span>GitHub</span>

                    </a>
                    <a
                        href="https://www.linkedin.com/in/nikhilkthota/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                    >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>

                    </a>
                </div>


                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '1rem', opacity: 0.7 }}>
                    © {new Date().getFullYear()} Nikhil Thota | Last Updated Dec 2025
                </div>

            </div>
        </footer>
    );
};

export default Footer;
