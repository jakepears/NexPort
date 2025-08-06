"use client";
import React, { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import primeraVid from "public/assets/vids/primera.webm";
import clothAnim from "public/assets/vids/weavingAnim.webm";
import beats from "public/assets/vids/vellumSim.webm";
import armStill from "public/assets/images/vellumStill.webp";
import primeraSC from "public/assets/images/primera-sc.webp";
import clothStill from "public/assets/images/clothStill.webp";
import styles from "./Work.module.scss";

export default function Work() {
  const workRef = useRef(null);
  const reaply = useRef(null);
  const primera = useRef(null);
  const beatsRef = useRef(null);
  const heading = useRef(null);
  const textAnims = useRef([]);

  const handleMouseEnter = useCallback((event) => {
    // play video
    const video = event.currentTarget.querySelector("video");
    video && video.play();

    const textAnim = event.currentTarget.querySelector(".textAnim");
    textAnim && animateTextIn(textAnim);

    // animation
  }, []);

  const handleMouseLeave = useCallback((event) => {
    // pause video
    const video = event.currentTarget.querySelector("video");
    video && video.pause();

    // animation
    const textAnim = event.currentTarget.querySelector(".textAnim");
    textAnim && animateTextOut(textAnim);
  }, []);

  const animateTextIn = (textAnim) => {
    gsap.fromTo(
      textAnim,
      {
        rotation: 10,
        opacity: 0,
        y: () => textAnim?.clientHeight ?? 0 * 0.5,
      },
      { rotation: 0, y: 0, opacity: 1, duration: 0.7, ease: "power4.out" }
    );
  };

  const animateTextOut = (textAnim) => {
    gsap.fromTo(
      textAnim,
      { rotation: 0, opacity: 1, y: 0 },
      {
        rotation: -10,
        y: -textAnim?.clientHeight ?? 0,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      }
    );
  };

  const scrollTriggerAnim = () => {
    // primera
    gsap.fromTo(
      primera.current,
      { y: -80 },
      {
        y: 120,
        scrollTrigger: {
          trigger: primera.current,
          ease: "power4.out",
          scrub: true,
        },
      }
    );

    // reaply
    gsap.fromTo(
      reaply.current,
      { y: -100 },
      {
        y: 140,
        scrollTrigger: {
          trigger: reaply.current,
          ease: "power4.out",
          scrub: true,
          velocity: 1.3,
        },
      }
    );

    // beatsRef

    gsap.fromTo(
      beatsRef.current,
      { y: -50 },
      {
        y: 110,
        scrollTrigger: {
          velocity: 2,
          start: "start end",
          invalidateOnRefresh: true,
          trigger: beatsRef.current,
          ease: "power4.out",
          scrub: true,
        },
      }
    );
  };
  const HeaderAnim = () => {
    // heading scroll trigger opening
    gsap.fromTo(
      heading.current,
      {
        y: 100,
        rotation: 6,
        opacity: 0,
        y: () => heading.current?.clientHeight ?? 0 * 0.5,
      },
      {
        rotation: 0,
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power4.out",
        scrollTrigger: { trigger: heading.current, start: "center bottom" },
      }
    );
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    scrollTriggerAnim();
    HeaderAnim();

    requestAnimationFrame(scrollTriggerAnim);
  }, []);

  return (
    <section
      className={`${styles.column} ${styles.contentWidth} ${styles.workSection}`}
      ref={workRef}
    >
      <div ref={heading} className={styles.anim}>
        <h1>work</h1>
      </div>
      <div className={styles.row}>
        <div
          ref={primera}
          data-cursor-text="Info below"
          className={`${styles.block} ${styles.primera}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={primeraSC}
            alt="Project 1"
            placeholder="blur"
            loading="lazy"
          />
          <video
            playsInline=""
            loop="loop"
            muted
            disablePictureInPicture=""
            className={styles.video}
            src={primeraVid}
            type="video/webm"
          >
            <source src={primeraVid} type="video/webm" />
          </video>
          <div className={styles.textWrapper}>
            <p ref={(el) => (textAnims.current[0] = el)} className="textAnim">
              <span>
                <strong>Primera</strong>
              </span>
              <span> Motion Graphics</span>
            </p>
          </div>
        </div>
        <div className={`${styles.column} ${styles.workRightSection}`}>
          <div className={styles.row}>
            <svg
              className={styles.icon}
              viewBox="0 0 12 12"
              fill="#1D2C27"
              xmlns="http://www.w3.org/2000/svg"
              data-v-669b4a84=""
            >
              <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"></path>
            </svg>
            <span className={styles.hoverFor}>Hover for preview</span>
          </div>
          <div
            className={`${styles.block} ${styles.cloth}`}
            ref={reaply}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={clothStill}
              alt={"picture of dude being cash money"}
              placeholder="blur"
              loading="lazy"
            />
            <video
              playsInline=""
              loop="loop"
              muted
              disablePictureInPicture=""
              className={styles.video}
              src={clothAnim}
              type="video/webm"
            >
              <source src={clothAnim} type="video/webm" />
            </video>
            <div className={styles.textWrapper}>
              <p ref={(el) => (textAnims.current[1] = el)} className="textAnim">
                <span>
                  <strong>Cloth Animation </strong>
                </span>
                <span>3D Motion Design</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div
          className={`${styles.block} ${styles.beats}`}
          ref={beatsRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={armStill}
            className={styles.armDisPic}
            fill
            sizes="40dvw"
            loading="lazy"
            alt={"picture of dude being cash money"}
          />
          <video
            playsInline=""
            loop="loop"
            muted
            disablePictureInPicture=""
            className={styles.video}
            src={beats}
            type="video/webm"
          >
            <source src={beats} type="video/webm" />
          </video>
          <div className={styles.textWrapper}>
            <p ref={(el) => (textAnims.current[2] = el)} className="textAnim">
              <span>
                <strong>Arm Disintegration</strong>
              </span>
              <span> VFX</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
