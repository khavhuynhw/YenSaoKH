import { Layout, Row, Col, Typography, Button, Space, Divider } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

const Footer = () => {
  return (
    <AntFooter
      style={{
        background: "#1a1a2e",
        color: "#ffffff",
        padding: "64px 0 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Footer Content */}
        <Row gutter={[48, 48]} style={{ marginBottom: "48px" }}>
          {/* Company Info */}
          <Col xs={24} md={12} lg={8}>
            <div style={{ marginBottom: "32px" }}>
              <Title
                level={3}
                style={{
                  color: "#d4af37",
                  fontSize: "1.5rem",
                  marginBottom: "16px",
                }}
              >
                PureNest
              </Title>
              <Text
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "16px",
                  display: "block",
                  marginBottom: "32px",
                }}
              >
                Premium Bird's Nest for your health and beauty
              </Text>
            </div>
            <Space size="middle">
              <Button
                type="text"
                icon={<FacebookOutlined />}
                style={{
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "25px",
                }}
              >
                Facebook
              </Button>
              <Button
                type="text"
                icon={<InstagramOutlined />}
                style={{
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "25px",
                }}
              >
                Instagram
              </Button>
              <Button
                type="text"
                icon={<TwitterOutlined />}
                style={{
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "25px",
                }}
              >
                Twitter
              </Button>
            </Space>
          </Col>

          {/* Products */}
          <Col xs={24} sm={12} lg={4}>
            <Title
              level={4}
              style={{
                color: "#d4af37",
                fontSize: "1.1rem",
                marginBottom: "24px",
              }}
            >
              Products
            </Title>
            <Space direction="vertical" size="small">
              <Link style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Raw Bird's Nest
              </Link>
              <Link style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Ready-to-Drink
              </Link>
              <Link style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Gift Sets
              </Link>
              <Link style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Accessories
              </Link>
            </Space>
          </Col>

          {/* Support */}
          <Col xs={24} sm={12} lg={4}>
            <Title
              level={4}
              style={{
                color: "#d4af37",
                fontSize: "1.1rem",
                marginBottom: "24px",
              }}
            >
              Support
            </Title>
            <Space direction="vertical" size="small">
              <Link style={{ color: "rgba(255, 255, 255, 0.7)" }}>FAQ</Link>
              <Link style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Shipping
              </Link>
              <Link style={{ color: "rgba(255, 255, 255, 0.7)" }}>Returns</Link>
              <Link style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Contact Us
              </Link>
            </Space>
          </Col>

          {/* Contact */}
          <Col xs={24} lg={8}>
            <Title
              level={4}
              style={{
                color: "#d4af37",
                fontSize: "1.1rem",
                marginBottom: "24px",
              }}
            >
              Contact
            </Title>
            <Space direction="vertical" size="middle">
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <MailOutlined style={{ color: "#d4af37" }} />
                <Text style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  info@purenest.com
                </Text>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <PhoneOutlined style={{ color: "#d4af37" }} />
                <Text style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  +1 (555) 123-4567
                </Text>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <EnvironmentOutlined style={{ color: "#d4af37" }} />
                <Text style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  123 Wellness St, Health City
                </Text>
              </div>
            </Space>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Divider style={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Text style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              &copy; 2024 PureNest. All rights reserved.
            </Text>
          </Col>
          <Col xs={24} md={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "32px",
              }}
            >
              <Link style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Privacy Policy
              </Link>
              <Link style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Terms of Service
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer;
