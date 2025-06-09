import { ConfigProvider, Layout } from "antd";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import AboutUs from "./components/AboutUs";
import HowItWorks from "./components/HowItWorks";
import Certificates from "./components/Certificates";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import ScrollAnimations from "./components/ScrollAnimations";
import AnimationWrapper from "./components/AnimationWrapper";

const { Content } = Layout;

function App() {
  const theme = {
    token: {
      colorPrimary: "#d4af37",
      colorLink: "#d4af37",
      colorLinkHover: "#f4e4a6",
      fontFamily: "Inter, system-ui, sans-serif",
      borderRadius: 12,
      fontSize: 16,
    },
    components: {
      Button: {
        borderRadius: 25,
        controlHeight: 48,
        fontSize: 16,
        fontWeight: 600,
      },
      Card: {
        borderRadius: 20,
        paddingLG: 32,
      },
      Menu: {
        horizontalItemSelectedColor: "#d4af37",
        horizontalItemHoverColor: "#d4af37",
      },
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header />
        <Content>
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
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
