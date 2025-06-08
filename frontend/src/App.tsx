import React from "react";
import { Layout, ConfigProvider } from "antd";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

const { Content } = Layout;

const App: React.FC = () => {
  // Custom theme for luxury feel
  const theme = {
    token: {
      colorPrimary: "#D4A574", // Luxury gold
      colorPrimaryHover: "#B8860B",
      fontFamily: '"Playfair Display", "Times New Roman", serif',
      fontSize: 16,
      borderRadius: 8,
    },
    components: {
      Button: {
        fontWeight: 600,
        borderRadius: 8,
      },
      Card: {
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      },
      Typography: {
        titleMarginTop: 0,
        titleMarginBottom: "0.5em",
      },
    },
  };

  return (
    <LanguageProvider>
      <ConfigProvider theme={theme}>
        <Layout className="luxury-layout">
          <Header />
          <Content className="main-content">
            <Hero />
            <FeaturedProducts />
            <Benefits />
            <Testimonials />
          </Content>
          <Footer />
        </Layout>
      </ConfigProvider>
    </LanguageProvider>
  );
};

export default App;
