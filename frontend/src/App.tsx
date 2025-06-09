import { ConfigProvider, Layout } from "antd";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

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
          <Hero />
          <Products />
          <Benefits />
          <Testimonials />
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
