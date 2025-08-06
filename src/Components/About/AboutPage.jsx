import { useMemo } from "react";
import dynamic from "next/dynamic";
import "../../styles/index.scss";

export default function AboutPage() {
  const LazyLanding = dynamic(() => import("./Landing/Landing"));
  const LazyAboutNav = dynamic(() => import("./AboutNav/AboutNav"));
  const LazyScroll = dynamic(() => import("../SmoothScroll"));
  const LazyCursor = dynamic(() => import("../Cursor"));
  const LazyFooter = dynamic(() => import("./Footer/Footer"));
  const Cursor = useMemo(() => LazyCursor, [LazyCursor]);
  const Scroll = useMemo(() => LazyScroll, [LazyScroll]);
  const Footer = useMemo(() => LazyFooter, [LazyFooter]);
  const Landing = useMemo(() => LazyLanding, [LazyLanding]);
  const AboutNav = useMemo(() => LazyAboutNav, [LazyAboutNav]);

  return (
    <>
      <Landing />
      <AboutNav />
      <Scroll />
      <Cursor />
      <Footer />
    </>
  );
}
