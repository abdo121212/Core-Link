import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import TwoBanner from "../Components/TwoBanner";
import Features from "../Components/Features";
import Security from "../Components/Security";
import Partners from "../Components/Partners";
import Clients from "../Components/Clients";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import ScrollUp from "../Components/ScrollUp";
import SocialLinks from "../Components/SocialLinks";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Helmet>
        <title>Home - Core Link</title>
        <meta
          name="description"
          content="الصفحة الرئيسية لشركة Core Link لحلول تكنولوجيا المعلومات"
        />
      </Helmet>
      <main className=" dark:text-white dark:bg-black  duration-300">
        <ScrollUp showButton={showButton} scrollToTop={scrollToTop} />
        <div className="container px-14 mx-auto">
          <Hero />
          <Banner />
          <TwoBanner />
          <Security />
          <Features />
          <Partners />
          <Clients />
          <SocialLinks />
        </div>
      </main>
    </>
  );
};

export default Home;
