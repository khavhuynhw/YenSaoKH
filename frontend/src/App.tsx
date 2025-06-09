import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Products />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
