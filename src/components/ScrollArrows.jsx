import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import '../styles/ScrollArrows.css';

const ScrollArrows = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    setShowScrollUp(scrollPosition > 100);
    setShowScrollDown(scrollPosition + windowHeight < documentHeight - 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="scroll-arrows">
      {showScrollUp && (
        <button className="scroll-arrow scroll-up" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
      {showScrollDown && (
        <button className="scroll-arrow scroll-down" onClick={scrollToBottom}>
          <FaArrowDown />
        </button>
      )}
    </div>
  );
};

export default ScrollArrows;
