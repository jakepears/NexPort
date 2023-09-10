"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./News.module.scss";
import Image from "next/image";
import caspian from "@assets/vids/caspian.webm";
import cameraMan from "@assets/images/sebastien-bourguet-ZI1FT0B68K8-unsplash.webp";
import oregonWelcome from "@assets/images/casey-olsen-2s11AHnb_SU-unsplash.webp";
import lonelyZone from "@assets/vids/video1.webm";

export default function News() {
  const wrapper = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);
  const heading0 = useRef(null);
  const heading1 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    //Image 0
    gsap.to(wrapper.current, {
      y: () => window.innerHeight * 0.15,
      scrollTrigger: { trigger: wrapper.current, scrub: true, end: "bottom" },
    });

    //Image 1
    gsap.to(image1.current, {
      x: () => -window.innerWidth * 0.12,
      y: () => -window.innerHeight * 0.1,
      scrollTrigger: {
        trigger: image1.current,
        scrub: 0.98,
        start: "top bottom",
        end: "bottom top",
        endTrigger: wrapper.current,
      },
    });

    //Image 2
    gsap.to(image2.current, {
      x: () => window.innerWidth * 0.16,
      y: () => -window.innerHeight * 0.03,
      scrollTrigger: {
        trigger: image2.current,
        scrub: 0.98,
        start: "top bottom",
        end: "bottom top",
        endTrigger: wrapper.current,
      },
    });

    //Image 3
    gsap.to(image3.current, {
      x: () => -window.innerWidth * 0.14,
      scrollTrigger: {
        trigger: image3.current,
        scrub: 0.98,
        start: "top bottom",
        end: "bottom top",
      },
    });

    //Image 4
    gsap.to(image4.current, {
      x: () => window.innerWidth * 0.15,
      scrollTrigger: {
        trigger: image4.current,
        scrub: 0.98,
        start: "top bottom",
        end: "bottom top",
      },
    });

    //heading scroll trigger opening
    gsap.fromTo(
      heading0.current,
      {
        rotation: 3,
        scale: 1.2,
        opacity: 0,
        y: () => heading0.current?.clientHeight ?? 0 * 0.54,
      },
      {
        rotation: 0,
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 1.13,
        ease: "power4.inOut",
        scrollTrigger: { trigger: heading1.current, start: "top bottom" },
      }
    );

    gsap.fromTo(
      heading1.current,
      {
        rotation: -3,
        opacity: 0,
        y: () => heading1.current?.clientHeight ?? 0 * 0.54,
      },
      {
        rotation: 0,
        y: 0,
        opacity: 1,
        duration: 1.13,
        ease: "power4.inOut",
        scrollTrigger: { trigger: heading1.current, start: "top bottom" },
      }
    );
    requestAnimationFrame;
  });

  return (
    <div
      className={`${styles.newsContainer} ${styles.center} ${styles.column}`}
    >
      <div className={styles.newsMediaContainer} ref={wrapper}>
        <div className={styles.newsMedia}>
          <video
            playsInline
            loop
            muted
            autoPlay
            disablePictureInPicture
            src={caspian}
            type="video/webm"
          />
        </div>
        <div className={styles.newsMedia} ref={image1}>
          <picture>
            <source
              src="https://images.pexels.com/photos/2121665/pexels-photo-2121665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              type="image/webp"
            />
            <Image
              src="https://images.pexels.com/photos/2121665/pexels-photo-2121665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              loading="lazy"
              height={750}
              width={1260}
              alt="luh shawty sign"
            />
          </picture>
        </div>
        <div className={styles.newsMedia} ref={image2}>
          <picture id="3643671" data-v-4a179df6="">
            <source type="image/webp" />
            <Image
              src={cameraMan}
              placeholder="blur"
              alt="a guy holding a camera"
              loading="lazy"
            />
          </picture>
        </div>
        <div className={styles.newsMedia} ref={image3}>
          <picture>
            <source type="image/webp" />
            <Image
              src={oregonWelcome}
              alt="welcome sign"
              placeholder="blur"
              loading="lazy"
            />
          </picture>
        </div>
        <div className={styles.newsMedia} ref={image4}>
          <video playsInline loop muted autoPlay disablePictureInPicture>
            <source src={lonelyZone} type="video/webm" />
          </video>
        </div>
      </div>
      <div className={styles.row}>
        <svg
          viewBox="0 0 12 12"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
          data-v-669b4a84=""
        >
          <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"></path>
        </svg>
        <p className={styles.newsSmallHeading}>popularity</p>
      </div>
      <h2>
        <div className={styles.anim}>
          <div ref={heading0}>let's</div>
        </div>
        <div className={styles.anim}>
          <div ref={heading1}>talk</div>
        </div>
      </h2>
      <p data-cursor-text="I'm lonely" className={styles.newsText}>
        i am interested in working with you,
        <br />
        any inquiries or requests are welcome to contact me.
      </p>
    </div>
  );
}
