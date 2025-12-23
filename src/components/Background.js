import React, { useEffect, useRef } from "react";
import "../styles/background.css";

export default function Background({ children }) {
  const gridRef = useRef(null);
  const scrollYRef = useRef(0);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
      if (gridRef.current) gridRef.current.classList.add("glowing");
      document.body.classList.add("is-scrolling");

      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        if (gridRef.current) gridRef.current.classList.remove("glowing");
        document.body.classList.remove("is-scrolling");
      }, 400);
    };



    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div ref={gridRef} className="grid-background">
      {children}
    </div>
  );
}
