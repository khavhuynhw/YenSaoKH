import React from "react";
import { Button, Row, Col, Typography, Space } from "antd";
import {
  ShoppingCartOutlined,
  PlayCircleOutlined,
  StarFilled,
  SafetyCertificateOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../contexts/LanguageContext";

const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} lg={12}>
            <div className="hero-content">
              <div className="hero-badge">
                <SafetyCertificateOutlined />
                <span>{t.hero.badge}</span>
              </div>

              <Title level={1} className="hero-title">
                {t.hero.title}{" "}
                <span className="highlight">{t.hero.titleHighlight}</span>
                <br />
                {t.hero.title === "Pure"
                  ? "for Optimal Health"
                  : "cho Sức Khỏe Tối Ưu"}
              </Title>

              <Paragraph className="hero-description">
                {t.hero.description}
              </Paragraph>

              <div className="hero-features">
                <div className="feature-item">
                  <StarFilled className="feature-icon" />
                  <span>{t.hero.feature1}</span>
                </div>
                <div className="feature-item">
                  <TruckOutlined className="feature-icon" />
                  <span>{t.hero.feature2}</span>
                </div>
              </div>

              <Space size="large" className="hero-actions">
                <Button
                  type="primary"
                  size="large"
                  icon={<ShoppingCartOutlined />}
                  className="cta-button"
                >
                  {t.hero.ctaButton}
                </Button>
                <Button
                  size="large"
                  icon={<PlayCircleOutlined />}
                  className="watch-video-btn"
                >
                  {t.hero.watchVideo}
                </Button>
              </Space>

              <div className="trust-indicators">
                <span className="trust-item">{t.hero.trustIndicator1}</span>
                <span className="trust-item">{t.hero.trustIndicator2}</span>
                <span className="trust-item">{t.hero.trustIndicator3}</span>
              </div>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className="hero-image">
              <div className="product-showcase">
                <div className="main-product">
                  <div className="product-image-placeholder">
                    <div className="nest-illustration">
                      <div className="nest-bowl"></div>
                      <div className="nest-content"></div>
                    </div>
                  </div>
                  <div className="product-glow"></div>
                </div>

                <div className="floating-elements">
                  <div className="benefit-bubble bubble-1">
                    <span>{t.hero.floatingBubble1}</span>
                  </div>
                  <div className="benefit-bubble bubble-2">
                    <span>{t.hero.floatingBubble2}</span>
                  </div>
                  <div className="benefit-bubble bubble-3">
                    <span>{t.hero.floatingBubble3}</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
