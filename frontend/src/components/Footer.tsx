const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-5">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-primary-gold text-2xl font-bold mb-4">
                PureNest
              </h3>
              <p className="text-white text-opacity-70 mb-8">
                Premium Bird's Nest for your health and beauty
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white border border-white border-opacity-20 px-4 py-2 rounded-3xl transition-all duration-300 hover:bg-primary-gold hover:border-primary-gold"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-white border border-white border-opacity-20 px-4 py-2 rounded-3xl transition-all duration-300 hover:bg-primary-gold hover:border-primary-gold"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-white border border-white border-opacity-20 px-4 py-2 rounded-3xl transition-all duration-300 hover:bg-primary-gold hover:border-primary-gold"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-primary-gold mb-6 text-lg">Products</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white text-opacity-70 transition-colors duration-300 hover:text-primary-gold"
                >
                  Raw Bird's Nest
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-opacity-70 transition-colors duration-300 hover:text-primary-gold"
                >
                  Ready-to-Drink
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-opacity-70 transition-colors duration-300 hover:text-primary-gold"
                >
                  Gift Sets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-opacity-70 transition-colors duration-300 hover:text-primary-gold"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-primary-gold mb-6 text-lg">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white text-opacity-70 transition-colors duration-300 hover:text-primary-gold"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-opacity-70 transition-colors duration-300 hover:text-primary-gold"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-opacity-70 transition-colors duration-300 hover:text-primary-gold"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-opacity-70 transition-colors duration-300 hover:text-primary-gold"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-12">
          <h4 className="text-primary-gold mb-6 text-lg">Contact</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white text-opacity-70">
            <p>📧 info@purenest.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Wellness St, Health City</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white border-opacity-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2024 PureNest. All rights reserved.</p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-white text-opacity-70 transition-colors duration-300 hover:text-primary-gold"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white text-opacity-70 transition-colors duration-300 hover:text-primary-gold"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
