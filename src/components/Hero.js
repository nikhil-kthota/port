import React, { useState } from "react";
import "../styles/hero.css";

const Hero = () => {
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCirclePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        className="hero-circle"
        style={{
          left: `${circlePos.x}px`,
          top: `${circlePos.y}px`,
        }}
      ></div>

      <div className="hero-content">
        <div className="hero-left">
          <span className="hero-small">
            - WEB DEVELOPER <br />- FRONTEND DEVELOPER <br />
            - PROMPT ENGINEER <br />- AI & ML ENTHUSIAST <br />- SOFTWARE
            ENGINEER
          </span>
        </div>

        <div className="hero-center">
          <span className="hero-name">NIKHIL THOTA</span>
          <span className="hero-tagline">BUILDING WEB SOLUTIONS FROM 0→1.</span>
        </div>

        <div className="hero-right">
          <span className="hero-desc">
            <b>OPEN TO WORK</b>
            <br />
            BASED IN HYDERABAD
          </span>
        </div>
      </div>
      <div className="scroll-arrow" onClick={scrollToNextSection}>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
};

export default Hero;
