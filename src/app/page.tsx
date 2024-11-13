"use client";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Header from "./_components/header";
import Hero from "./_components/hero";
import Feature from "./_components/features";
import ProjectsSection from "./_components/projects";
import Reviews from "./_components/reviews";
import Faq from "./_components/faq";
import ScrollToTop from "./_components/scrollTop";
import Feature2 from "./_components/features2";
import Contact from "./_components/contact-form";
import Feature3 from "./_components/features3";
import Project from "./_components/projects";
import Footer from "./_components/footer";
import Feature1 from "./_components/feature1";
import { BiArrowToRight } from "react-icons/bi";
import AreaServed from "./_components/faq";


const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } }
};

const scrollAnimation = (delay = 0) => ({
  hidden: { opacity: 0.4, y: 200 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay } }
});

const AnimatedSection = ({ children, delay = 0 }: any) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={scrollAnimation(delay)}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="overflow-x-hidden scroll-smooth bg-slate-400 bg-cover bg-repeat">
      <div className="flex justify-evenly items-center max-w-7xl w-full px-4  max-md:flex-col">
        <div className="flex items-center text-sm text-black p-2 md:mx-10">
          Get Free Estimates & Consultations Now
        </div>
        <button className="flex items-center text-black text-xs">
          <span className="pr-2 justify-end mx-auto">See More</span>
          <BiArrowToRight />
        </button>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
        id="header" className="fixed top-0 left-0 right-0 z-50 "
      >
        <Header />
      </motion.div>
      <AnimatedSection>
        <div id="hero">
          <Hero />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div id="about">
          <Feature1 />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div id="about">
          <Feature />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div id="about">
          <Feature2 />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div id="about">
          <Feature3 />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div id="about">
          <Contact />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div id="projects">
          <Project />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div id="faq">
          <AreaServed />
        </div>
      </AnimatedSection>
      <div id="testimonials">
        <Reviews />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
