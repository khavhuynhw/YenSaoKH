import { useState } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <h2>PureNest</h2>
              <span className="logo-subtitle">Premium Bird's Nest</span>
            </div>

            <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#products" className="nav-link">
                Products
              </a>
              <a href="#benefits" className="nav-link">
                Benefits
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </nav>

            <div className="header-actions">
              <button className="cart-btn">
                <span className="cart-icon">🛒</span>
                <span className="cart-count">0</span>
              </button>
              <button className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Pure <span className="highlight">Bird's Nest</span>
              <br />
              For Your Health
            </h1>
            <p className="hero-description">
              Experience the ancient secret of beauty and wellness with our
              premium, hand-harvested bird's nest products. Rich in essential
              amino acids, collagen, and nutrients for radiant skin and optimal
              health.
            </p>
            <div className="hero-actions">
              <button className="cta-primary">Shop Now</button>
              <button className="cta-secondary">Learn More</button>
            </div>
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>100% Natural</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Lab Tested</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-product-showcase">
              <div className="showcase-item main-product">
                <div className="product-glow"></div>
                <div className="product-placeholder">Premium Bird's Nest</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg-pattern"></div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Premium Collection</h2>
            <p className="section-subtitle">
              Carefully sourced and processed to preserve maximum nutritional
              value
            </p>
          </div>

          <div className="products-grid">
            <div className="product-card featured">
              <div className="product-badge">Bestseller</div>
              <div className="product-image">
                <div className="product-placeholder">Raw Bird's Nest</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Premium Raw Bird's Nest</h3>
                <p className="product-description">
                  Hand-picked cave bird's nest, perfect for traditional
                  preparation
                </p>
                <div className="product-price">
                  <span className="price">$299</span>
                  <span className="price-unit">/ 50g</span>
                </div>
                <button className="product-btn">Add to Cart</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="product-placeholder">Ready-to-Drink</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Ready-to-Drink Bird's Nest</h3>
                <p className="product-description">
                  Convenient bottled bird's nest with rock sugar
                </p>
                <div className="product-price">
                  <span className="price">$89</span>
                  <span className="price-unit">/ 6 bottles</span>
                </div>
                <button className="product-btn">Add to Cart</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="product-placeholder">Gift Set</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Luxury Gift Set</h3>
                <p className="product-description">
                  Elegant packaging perfect for special occasions
                </p>
                <div className="product-price">
                  <span className="price">$499</span>
                  <span className="price-unit">/ set</span>
                </div>
                <button className="product-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Health Benefits</h2>
            <p className="section-subtitle">
              Scientifically proven benefits backed by centuries of traditional
              use
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">✨</div>
              <h3 className="benefit-title">Skin Beauty</h3>
              <p className="benefit-description">
                Rich in collagen and amino acids that promote skin elasticity
                and radiance
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">💪</div>
              <h3 className="benefit-title">Immune Support</h3>
              <p className="benefit-description">
                Boosts immune system with natural glycoproteins and antioxidants
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🧠</div>
              <h3 className="benefit-title">Mental Clarity</h3>
              <p className="benefit-description">
                Enhances cognitive function and supports brain health
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3 className="benefit-title">Energy Boost</h3>
              <p className="benefit-description">
                Natural energy enhancement without caffeine or stimulants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "I've been using PureNest for 6 months and my skin has never
                looked better. The quality is exceptional and I feel more
                energetic every day."
              </p>
              <div className="testimonial-author">
                <strong>Sarah Chen</strong>
                <span>Verified Customer</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "As a busy professional, the ready-to-drink option is perfect
                for me. Great taste and I definitely notice the health
                benefits."
              </p>
              <div className="testimonial-author">
                <strong>Michael Wong</strong>
                <span>Verified Customer</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "The gift set was perfect for my mother's birthday. She loves
                the quality and the beautiful packaging made it extra special."
              </p>
              <div className="testimonial-author">
                <strong>Lisa Kim</strong>
                <span>Verified Customer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <h3>PureNest</h3>
                <p>Premium Bird's Nest for your health and beauty</p>
              </div>
              <div className="footer-social">
                <a href="#" className="social-link">
                  Facebook
                </a>
                <a href="#" className="social-link">
                  Instagram
                </a>
                <a href="#" className="social-link">
                  Twitter
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Products</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Raw Bird's Nest</a>
                </li>
                <li>
                  <a href="#">Ready-to-Drink</a>
                </li>
                <li>
                  <a href="#">Gift Sets</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Support</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <div className="contact-info">
                <p>📧 info@purenest.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📍 123 Wellness St, Health City</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 PureNest. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
