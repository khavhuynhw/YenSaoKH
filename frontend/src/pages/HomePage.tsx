import Hero from "../components/Hero";
import Products from "../components/Products";
import Benefits from "../components/Benefits";
import AboutUs from "../components/AboutUs";
import HowItWorks from "../components/HowItWorks";
import Certificates from "../components/Certificates";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CallToAction from "../components/CallToAction";
import ScrollAnimations from "../components/ScrollAnimations";
import AnimationWrapper from "../components/AnimationWrapper";

const HomePage = () => {
  return (
    <>
      <ScrollAnimations />
      <Hero />
      <AnimationWrapper animation="fadeIn" delay={0.2}>
        <Products />
      </AnimationWrapper>
      <AnimationWrapper animation="slideUp" delay={0.1}>
        <Benefits />
      </AnimationWrapper>
      <AnimationWrapper animation="slideLeft" delay={0.2}>
        <AboutUs />
      </AnimationWrapper>
      <AnimationWrapper animation="fadeIn" delay={0.1}>
        <HowItWorks />
      </AnimationWrapper>
      <AnimationWrapper animation="slideUp" delay={0.2}>
        <Certificates />
      </AnimationWrapper>
      <AnimationWrapper animation="slideRight" delay={0.1}>
        <Testimonials />
      </AnimationWrapper>
      <AnimationWrapper animation="fadeIn" delay={0.2}>
        <FAQ />
      </AnimationWrapper>
      <AnimationWrapper animation="scaleIn" delay={0.1}>
        <CallToAction />
      </AnimationWrapper>
    </>
  );
};

export default HomePage;
