"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import styles from "./ScrollCTA.module.scss";

function ScrollCTA() {
  const [opacity, setOpacity] = useState(0.5);

  const handleScroll = () => {
    const opacity = window.scrollY > 100 ? 0 : 0.5;
    setOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //opening fade in
  const scrollCTA = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      scrollCTA.current,
      { opacity: 0 },
      { opacity: 0.5, duration: 1, delay: 2.6 }
    );
  }, []);

  return (
    <p className={styles.scrollCta} ref={scrollCTA}>
      Scroll to explore
    </p>
  );
}

export default ScrollCTA;
