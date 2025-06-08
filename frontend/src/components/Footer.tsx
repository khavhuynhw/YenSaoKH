import React from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  Space,
  Button,
  Input,
  Divider,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  SendOutlined,
  SafetyCertificateOutlined,
  TruckOutlined,
  CreditCardOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../contexts/LanguageContext";

const { Footer: AntFooter } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <AntFooter className="luxury-footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} lg={12}>
              <Title
                level={3}
                className="newsletter-title"
                style={{ color: "#FFFFFF" }}
              >
                {t.footer.newsletter.title}
              </Title>
              <Paragraph
                className="newsletter-description"
                style={{ color: "#E0E0E0" }}
              >
                {t.footer.newsletter.description}
              </Paragraph>
            </Col>
            <Col xs={24} lg={12}>
              <div className="newsletter-form">
                <Space.Compact size="large" style={{ width: "100%" }}>
                  <Input
                    placeholder={t.footer.newsletter.placeholder}
                    className="newsletter-input"
                  />
                  <Button
                    type="primary"
                    icon={<SendOutlined />}
                    className="newsletter-btn"
                  >
                    {t.footer.newsletter.subscribe}
                  </Button>
                </Space.Compact>
                <Text className="privacy-notice" style={{ color: "#BDBDBD" }}>
                  {t.footer.newsletter.privacy}
                </Text>
              </div>
            </Col>
          </Row>
        </div>

        <Divider className="footer-divider" />

        {/* Main Footer Content */}
        <div className="footer-content">
          <Row gutter={[32, 32]}>
            {/* Company Info */}
            <Col xs={24} sm={12} lg={6}>
              <div className="footer-section">
                <div className="footer-logo">
                  <Title level={3}>
                    <span className="logo-icon">🪺</span>
                    NestLux
                  </Title>
                  <Text className="brand-tagline">{t.header.brandTagline}</Text>
                </div>
                <Paragraph
                  className="company-description"
                  style={{ color: "#E0E0E0" }}
                >
                  {language === "vi"
                    ? "Sản phẩm yến sào ăn được cao cấp có nguồn gốc từ các trang trại bền vững, được chế biến theo phương pháp truyền thống để đạt sức khỏe và sự lành mạnh tối ưu."
                    : "Premium edible bird's nest products sourced from sustainable farms, processed with traditional methods for optimal health and wellness."}
                </Paragraph>
                <div className="social-links">
                  <Space size="middle">
                    <Button
                      type="text"
                      icon={<FacebookOutlined />}
                      className="social-btn"
                    />
                    <Button
                      type="text"
                      icon={<InstagramOutlined />}
                      className="social-btn"
                    />
                    <Button
                      type="text"
                      icon={<TwitterOutlined />}
                      className="social-btn"
                    />
                    <Button
                      type="text"
                      icon={<YoutubeOutlined />}
                      className="social-btn"
                    />
                  </Space>
                </div>
              </div>
            </Col>

            {/* Quick Links */}
            <Col xs={24} sm={12} lg={6}>
              <div className="footer-section">
                <Title
                  level={4}
                  className="footer-section .section-title"
                  style={{ color: "#FFFFFF" }}
                >
                  {t.footer.quickLinks.title}
                </Title>
                <ul className="footer-links">
                  <li>
                    <Link href="#products">
                      {t.footer.quickLinks.allProducts}
                    </Link>
                  </li>
                  <li>
                    <Link href="#benefits">
                      {t.footer.quickLinks.healthBenefits}
                    </Link>
                  </li>
                  <li>
                    <Link href="#about">{t.footer.quickLinks.aboutUs}</Link>
                  </li>
                  <li>
                    <Link href="#quality">
                      {t.footer.quickLinks.qualityAssurance}
                    </Link>
                  </li>
                  <li>
                    <Link href="#preparation">
                      {t.footer.quickLinks.preparationGuide}
                    </Link>
                  </li>
                  <li>
                    <Link href="#blog">{t.footer.quickLinks.healthBlog}</Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Customer Care */}
            <Col xs={24} sm={12} lg={6}>
              <div className="footer-section">
                <Title
                  level={4}
                  className="footer-section .section-title"
                  style={{ color: "#FFFFFF" }}
                >
                  {t.footer.customerCare.title}
                </Title>
                <ul className="footer-links">
                  <li>
                    <Link href="#contact">{t.footer.customerCare.contact}</Link>
                  </li>
                  <li>
                    <Link href="#shipping">
                      {t.footer.customerCare.shipping}
                    </Link>
                  </li>
                  <li>
                    <Link href="#returns">{t.footer.customerCare.returns}</Link>
                  </li>
                  <li>
                    <Link href="#faq">{t.footer.customerCare.faq}</Link>
                  </li>
                  <li>
                    <Link href="#track">{t.footer.customerCare.track}</Link>
                  </li>
                  <li>
                    <Link href="#wholesale">
                      {t.footer.customerCare.wholesale}
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Contact Info */}
            <Col xs={24} sm={12} lg={6}>
              <div className="footer-section">
                <Title
                  level={4}
                  className="footer-section .section-title"
                  style={{ color: "#FFFFFF" }}
                >
                  {t.footer.contact.title}
                </Title>
                <div className="contact-info">
                  <div className="contact-item">
                    <PhoneOutlined className="contact-icon" />
                    <div>
                      <Text strong style={{ color: "#FFFFFF" }}>
                        {t.footer.contact.phone}
                      </Text>
                      <br />
                      <Text style={{ color: "#E0E0E0" }}>
                        {t.footer.contact.phoneHours}
                      </Text>
                    </div>
                  </div>
                  <div className="contact-item">
                    <MailOutlined className="contact-icon" />
                    <div>
                      <Text strong style={{ color: "#FFFFFF" }}>
                        {t.footer.contact.email}
                      </Text>
                      <br />
                      <Text style={{ color: "#E0E0E0" }}>
                        {t.footer.contact.emailLabel}
                      </Text>
                    </div>
                  </div>
                  <div className="contact-item">
                    <EnvironmentOutlined className="contact-icon" />
                    <div>
                      <Text strong style={{ color: "#FFFFFF" }}>
                        {t.footer.contact.address}
                      </Text>
                      <br />
                      <Text style={{ color: "#E0E0E0" }}>
                        {t.footer.contact.addressLabel}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Trust Badges */}
        <div className="trust-badges">
          <Row gutter={[16, 16]} justify="center">
            <Col>
              <div className="trust-badge">
                <SafetyCertificateOutlined className="badge-icon" />
                <Text style={{ color: "#E0E0E0" }}>
                  {t.footer.trustBadges.quality}
                </Text>
              </div>
            </Col>
            <Col>
              <div className="trust-badge">
                <TruckOutlined className="badge-icon" />
                <Text style={{ color: "#E0E0E0" }}>
                  {t.footer.trustBadges.shipping}
                </Text>
              </div>
            </Col>
            <Col>
              <div className="trust-badge">
                <CreditCardOutlined className="badge-icon" />
                <Text style={{ color: "#E0E0E0" }}>
                  {t.footer.trustBadges.payment}
                </Text>
              </div>
            </Col>
            <Col>
              <div className="trust-badge">
                <CustomerServiceOutlined className="badge-icon" />
                <Text style={{ color: "#E0E0E0" }}>
                  {t.footer.trustBadges.support}
                </Text>
              </div>
            </Col>
          </Row>
        </div>

        <Divider className="footer-divider" />

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <Row justify="space-between" align="middle">
            <Col xs={24} md={12}>
              <Text className="copyright" style={{ color: "#BDBDBD" }}>
                {t.footer.bottom.copyright} | {t.footer.bottom.privacy} |{" "}
                {t.footer.bottom.terms}
              </Text>
            </Col>
            <Col xs={24} md={12}>
              <div className="payment-methods">
                <Text style={{ color: "#BDBDBD" }}>
                  {t.footer.bottom.paymentMethods}
                </Text>
                <Space>
                  <span className="payment-icon">💳</span>
                  <span className="payment-icon">🏦</span>
                  <span className="payment-icon">📱</span>
                </Space>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
