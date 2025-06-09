import { ConfigProvider, Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

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
      Pagination: {
        itemActiveBg: "#A0522D",
        itemLinkBg: "#ffffff",
        itemInputBg: "#ffffff",
      },
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Header />
          <Content>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/san-pham" element={<ProductsPage />} />
              <Route path="/products" element={<ProductsPage />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
