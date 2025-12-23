import React from 'react';
import '../styles/header.css';

const Header = () => {
  const [copyFeedback, setCopyFeedback] = React.useState({ visible: false, x: 0, y: 0 });

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "nikhilkthota@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopyFeedback({ visible: true, x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setCopyFeedback(prev => ({ ...prev, visible: false }));
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <header className="header">
      <div className="header-container">
        <a
          href="mailto:nikhilkthota@gmail.com"
          className="header-link email-link"
          onClick={handleEmailClick}
          aria-label="Copy Email"
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
          title="Click to copy email"
        >


          <span className="full-text">NIKHILKTHOTA@GMAIL.COM</span>
          <span className="short-text">EMAIL</span>
        </a>

        <a
          href="https://github.com/nikhil-kthota"
          className="header-link github-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          title="Click to open in new tab"
        >


          <span className="full-text">GITHUB.COM/NIKHIL-KTHOTA</span>
          <span className="short-text">GITHUB</span>
        </a>

        <a
          href="https://www.linkedin.com/in/nikhilkthota/"
          className="header-link linkedin-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          title="Click to open in new tab"
        >


          <span className="full-text">LINKEDIN.COM/IN/NIKHILKTHOTA</span>
          <span className="short-text">LINKEDIN</span>
        </a>
      </div>

      {copyFeedback.visible && (
        <div style={{
          position: 'fixed',
          top: copyFeedback.y,
          left: copyFeedback.x + 15,
          background: '#e5e2de',
          color: '#000',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '0.8rem',
          fontWeight: '600',
          pointerEvents: 'none',
          zIndex: 2000,
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          transform: 'translateY(-50%)',
          animation: 'fadeIn 0.2s ease'
        }}>
          Copied
        </div>
      )}
    </header>
  );
};

export default Header;