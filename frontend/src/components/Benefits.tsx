import React from "react";
import { Row, Col, Typography, Card, Progress } from "antd";
import {
  HeartOutlined,
  UserOutlined,
  ThunderboltOutlined,
  SafetyCertificateOutlined,
  StarOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../contexts/LanguageContext";
import type { Benefit } from "../types";

const { Title, Paragraph, Text } = Typography;

const Benefits: React.FC = () => {
  const { t } = useLanguage();

  const benefits: Benefit[] = [
    {
      icon: "skin",
      title: t.benefits.benefit1.title,
      description: t.benefits.benefit1.description,
    },
    {
      icon: "shield",
      title: t.benefits.benefit2.title,
      description: t.benefits.benefit2.description,
    },
    {
      icon: "energy",
      title: t.benefits.benefit3.title,
      description: t.benefits.benefit3.description,
    },
    {
      icon: "heart",
      title: t.benefits.benefit4.title,
      description: t.benefits.benefit4.description,
    },
    {
      icon: "brain",
      title: t.benefits.benefit5.title,
      description: t.benefits.benefit5.description,
    },
    {
      icon: "recovery",
      title: t.benefits.benefit6.title,
      description: t.benefits.benefit6.description,
    },
  ];

  const getIcon = (iconType: string) => {
    const iconMap = {
      skin: <UserOutlined />,
      shield: <SafetyCertificateOutlined />,
      energy: <ThunderboltOutlined />,
      heart: <HeartOutlined />,
      brain: <StarOutlined />,
      recovery: <MedicineBoxOutlined />,
    };
    return iconMap[iconType as keyof typeof iconMap] || <StarOutlined />;
  };

  const nutritionFacts = [
    {
      nutrient: "Protein",
      percentage: 65,
      amount: t.benefits.nutrition.protein,
    },
    {
      nutrient: "Collagen",
      percentage: 45,
      amount: t.benefits.nutrition.collagen,
    },
    {
      nutrient: "Amino Acids",
      percentage: 38,
      amount: t.benefits.nutrition.aminoAcids,
    },
    {
      nutrient: "Minerals",
      percentage: 25,
      amount: t.benefits.nutrition.minerals,
    },
  ];

  return (
    <section className="benefits-section">
      <div className="container">
        {/* Health Benefits */}
        <div className="benefits-content">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className="benefits-info">
                <Title level={2} className="section-title">
                  {t.benefits.title}
                </Title>
                <Paragraph className="section-description">
                  {t.benefits.description}
                </Paragraph>

                <div className="certification-badges">
                  <div className="badge">
                    <span className="badge-icon">🏆</span>
                    <div>
                      <Text strong>{t.benefits.cert1.title}</Text>
                      <br />
                      <Text type="secondary">{t.benefits.cert1.subtitle}</Text>
                    </div>
                  </div>
                  <div className="badge">
                    <span className="badge-icon">🔬</span>
                    <div>
                      <Text strong>{t.benefits.cert2.title}</Text>
                      <br />
                      <Text type="secondary">{t.benefits.cert2.subtitle}</Text>
                    </div>
                  </div>
                  <div className="badge">
                    <span className="badge-icon">🌿</span>
                    <div>
                      <Text strong>{t.benefits.cert3.title}</Text>
                      <br />
                      <Text type="secondary">{t.benefits.cert3.subtitle}</Text>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} lg={12}>
              <div className="nutrition-facts">
                <Title level={3} className="nutrition-title">
                  {t.benefits.nutritionTitle}
                </Title>
                <div className="nutrition-chart">
                  {nutritionFacts.map((fact, index) => (
                    <div key={index} className="nutrition-item">
                      <div className="nutrition-header">
                        <Text strong>{fact.nutrient}</Text>
                        <Text type="secondary">{fact.amount}</Text>
                      </div>
                      <Progress
                        percent={fact.percentage}
                        strokeColor={{
                          "0%": "#D4A574",
                          "100%": "#B8860B",
                        }}
                        showInfo={false}
                        className="nutrition-bar"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid">
          <Title level={2} className="section-title text-center">
            {t.benefits.certificationTitle}
          </Title>

          <Row gutter={[32, 32]}>
            {benefits.map((benefit, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card className="benefit-card" hoverable>
                  <div className="benefit-icon">{getIcon(benefit.icon)}</div>
                  <Title level={4} className="benefit-title">
                    {benefit.title}
                  </Title>
                  <Paragraph className="benefit-description">
                    {benefit.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Scientific Backing */}
        <div className="scientific-backing">
          <Card className="science-card">
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={8}>
                <div className="science-icon">
                  <span className="large-icon">🧬</span>
                </div>
              </Col>
              <Col xs={24} md={16}>
                <Title level={3}>{t.benefits.scienceTitle}</Title>
                <Paragraph>{t.benefits.scienceDescription}</Paragraph>
                <div className="study-stats">
                  <div className="stat">
                    <Title level={4}>95%</Title>
                    <Text>{t.benefits.stats.satisfaction}</Text>
                  </div>
                  <div className="stat">
                    <Title level={4}>78%</Title>
                    <Text>{t.benefits.stats.skinImprovement}</Text>
                  </div>
                  <div className="stat">
                    <Title level={4}>89%</Title>
                    <Text>{t.benefits.stats.energyLevels}</Text>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
