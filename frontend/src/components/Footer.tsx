import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  Button,
  Input,
  Space,
  Divider,
} from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  SendOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SafetyCertificateOutlined,
  TruckOutlined,
  CreditCardOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;
const { Search } = Input;

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (value: string) => {
    console.log("Newsletter signup:", value);
    setEmail("");
  };

  const footerStyle = {
    backgroundColor: "#3a2f1e",
    color: "#ffffff",
    fontFamily: '"Playfair Display", "Times New Roman", serif',
    paddingTop: "60px",
    paddingBottom: "24px",
  };

  const containerStyle = {
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "24px",
    paddingRight: "24px",
  };

  const newsletterSectionStyle = {
    backgroundColor: "#5d4e37",
    borderRadius: "16px",
    padding: "48px 32px",
    marginBottom: "60px",
  };

  const brandSectionStyle = {
    backgroundColor: "#5d4e37",
    borderRadius: "12px",
    padding: "32px",
    marginBottom: "32px",
  };

  return (
    <AntFooter style={footerStyle}>
      <div style={containerStyle}>
        {/* Newsletter Section */}
        <div style={newsletterSectionStyle}>
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={12}>
              <Title
                level={3}
                style={{
                  color: "#ffffff",
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "28px",
                  fontWeight: "600",
                  marginBottom: "12px",
                }}
              >
                Cập Nhật Tin Tức Cùng PureNest
              </Title>
              <Text
                style={{
                  color: "#ffffff",
                  lineHeight: "24px",
                  marginBottom: "16px",
                  display: "block",
                }}
              >
                Nhận những mẹo sức khỏe mới nhất, ưu đãi độc quyền và cập nhật
                sản phẩm cao cấp được gửi trực tiếp đến hộp thư của bạn.
              </Text>
            </Col>
            <Col xs={24} md={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", width: "100%" }}>
                  <Input
                    placeholder="Nhập địa chỉ email của bạn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      height: "48px",
                      fontSize: "18px",
                      borderRadius: "8px 0 0 8px",
                      border: "0.8px solid #bdbdbd",
                      marginRight: "-1px",
                    }}
                  />
                  <Button
                    type="primary"
                    icon={<SendOutlined />}
                    onClick={() => handleNewsletterSignup(email)}
                    style={{
                      height: "48px",
                      backgroundColor: "#d4a574",
                      borderColor: "#d4a574",
                      borderRadius: "0 10px 10px 0",
                      fontSize: "18px",
                      fontWeight: "600",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                    }}
                  >
                    Đăng Ký
                  </Button>
                </div>
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: "12px",
                    lineHeight: "18px",
                  }}
                >
                  Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ
                  lúc nào.
                </Text>
              </div>
            </Col>
          </Row>
        </div>

        <Divider style={{ borderColor: "#757575", marginBottom: "48px" }} />

        {/* Main Footer Content */}
        <div style={{ marginBottom: "48px" }}>
          <Row gutter={[32, 32]}>
            {/* Company Info */}
            <Col xs={24} sm={12} md={6}>
              <div style={{ marginBottom: "32px" }}>
                <div>
                  <Title
                    level={3}
                    style={{
                      color: "#ffffff",
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "28px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ fontSize: "24px", marginRight: "8px" }}>
                      🪺
                    </span>
                    PureNest
                  </Title>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: "12px",
                      fontWeight: "500",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      display: "block",
                    }}
                  >
                    Yến Sào Cao Cấp
                  </Text>
                </div>
                <Text
                  style={{
                    color: "#ffffff",
                    lineHeight: "24px",
                    marginTop: "16px",
                    marginBottom: "16px",
                    display: "block",
                  }}
                >
                  Sản phẩm yến sào ăn được cao cấp có nguồn gốc từ các trang
                  trại bền vững, được chế biến theo phương pháp truyền thống để
                  đạt sức khỏe và sự lành mạnh tối ưu.
                </Text>
                <div style={{ marginTop: "16px" }}>
                  <Space size="middle">
                    <Button
                      shape="circle"
                      icon={<FacebookOutlined />}
                      style={{
                        backgroundColor: "transparent",
                        color: "#ffffff",
                        border: "0.8px solid #757575",
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <Button
                      shape="circle"
                      icon={<InstagramOutlined />}
                      style={{
                        backgroundColor: "transparent",
                        color: "#ffffff",
                        border: "0.8px solid #757575",
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <Button
                      shape="circle"
                      icon={<TwitterOutlined />}
                      style={{
                        backgroundColor: "transparent",
                        color: "#ffffff",
                        border: "0.8px solid #757575",
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <Button
                      shape="circle"
                      icon={<YoutubeOutlined />}
                      style={{
                        backgroundColor: "transparent",
                        color: "#ffffff",
                        border: "0.8px solid #757575",
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </Space>
                </div>
              </div>
            </Col>

            {/* Quick Links */}
            <Col xs={24} sm={12} md={6}>
              <div style={{ marginBottom: "32px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#ffffff",
                    fontSize: "22px",
                    fontWeight: "600",
                    marginBottom: "11px",
                  }}
                >
                  Liên Kết Nhanh
                </Title>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="#products"
                      style={{
                        color: "#ffffff",
                        fontWeight: "500",
                        lineHeight: "24px",
                        transition: "color 0.3s",
                      }}
                    >
                      Tất Cả Sản Phẩm
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="#benefits"
                      style={{
                        color: "#ffffff",
                        fontWeight: "500",
                        lineHeight: "24px",
                        transition: "color 0.3s",
                      }}
                    >
                      Lợi Ích Sức Khỏe
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="#about"
                      style={{
                        color: "#ffffff",
                        fontWeight: "500",
                        lineHeight: "24px",
                        transition: "color 0.3s",
                      }}
                    >
                      Về Chúng Tôi
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="#quality"
                      style={{
                        color: "#ffffff",
                        fontWeight: "500",
                        lineHeight: "24px",
                        transition: "color 0.3s",
                      }}
                    >
                      Đảm Bảo Chất Lượng
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="#preparation"
                      style={{
                        color: "#ffffff",
                        fontWeight: "500",
                        lineHeight: "24px",
                        transition: "color 0.3s",
                      }}
                    >
                      Hướng Dẫn Chế Biến
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="#blog"
                      style={{
                        color: "#ffffff",
                        fontWeight: "500",
                        lineHeight: "24px",
                        transition: "color 0.3s",
                      }}
                    >
                      Blog Sức Khỏe
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Customer Care */}
            <Col xs={24} sm={12} md={6}>
              <div style={{ marginBottom: "32px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#ffffff",
                    fontSize: "22px",
                    fontWeight: "600",
                    marginBottom: "11px",
                  }}
                >
                  Chăm Sóc Khách Hàng
                </Title>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="#contact"
                      style={{
                        color: "#ffffff",
                        fontWeight: "500",
                        lineHeight: "24px",
                        transition: "color 0.3s",
                      }}
                    >
                      Liên Hệ Chúng Tôi
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="#shipping"
                      style={{
                        color: "#ffffff",
                        fontWeight: "500",
                        lineHeight: "24px",
                        transition: "color 0.3s",
                      }}
                    >
                      Thông Tin Vận Chuyển
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="#returns"
                      style={{
                        color: "#ffffff",
                        fontWeight: "500",
                        lineHeight: "24px",
                        transition: "color 0.3s",
                      }}
                    >
                      Đổi Trả & Hoàn Tiền
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="#faq"
                      style={{
                        color: "#ffffff",
                        fontWeight: "500",
                        lineHeight: "24px",
                        transition: "color 0.3s",
                      }}
                    >
                      Câu Hỏi Thường Gặp
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="#track"
                      style={{
                        color: "#ffffff",
                        fontWeight: "500",
                        lineHeight: "24px",
                        transition: "color 0.3s",
                      }}
                    >
                      Theo Dõi Đơn Hàng
                    </Link>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <Link
                      href="#wholesale"
                      style={{
                        color: "#ffffff",
                        fontWeight: "500",
                        lineHeight: "24px",
                        transition: "color 0.3s",
                      }}
                    >
                      Yêu Cầu Bán Sỉ
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Contact Info */}
            <Col xs={24} sm={12} md={6}>
              <div style={{ marginBottom: "32px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#ffffff",
                    fontSize: "22px",
                    fontWeight: "600",
                    marginBottom: "11px",
                  }}
                >
                  Liên Hệ
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <PhoneOutlined
                      style={{
                        color: "#ffffff",
                        marginTop: "2px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    />
                    <div>
                      <Text
                        style={{
                          color: "#ffffff",
                          fontWeight: "600",
                          display: "block",
                        }}
                      >
                        +1 (555) 123-4567
                      </Text>
                      <Text style={{ color: "#ffffff" }}>
                        Thứ 2-6 9AM-6PM EST
                      </Text>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <MailOutlined
                      style={{
                        color: "#ffffff",
                        marginTop: "2px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    />
                    <div>
                      <Text
                        style={{
                          color: "#ffffff",
                          fontWeight: "600",
                          display: "block",
                        }}
                      >
                        hello@purenest.com
                      </Text>
                      <Text style={{ color: "#ffffff" }}>
                        Hỗ Trợ Khách Hàng
                      </Text>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <EnvironmentOutlined
                      style={{
                        color: "#ffffff",
                        marginTop: "2px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    />
                    <div>
                      <Text
                        style={{
                          color: "#ffffff",
                          fontWeight: "600",
                          display: "block",
                        }}
                      >
                        123 Wellness Street
                      </Text>
                      <Text style={{ color: "#ffffff" }}>
                        New York, NY 10001
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Quality Certifications */}
        <div style={brandSectionStyle}>
          <Row gutter={[16, 16]} justify="center">
            <Col>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  textAlign: "center",
                }}
              >
                <SafetyCertificateOutlined
                  style={{
                    color: "#ffffff",
                    fontSize: "24px",
                    fontWeight: "500",
                  }}
                />
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Chứng Nhận Chất Lượng Cao Cấp
                </Text>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  textAlign: "center",
                }}
              >
                <TruckOutlined
                  style={{
                    color: "#ffffff",
                    fontSize: "24px",
                    fontWeight: "500",
                  }}
                />
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Miễn Phí Vận Chuyển Toàn Cầu
                </Text>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  textAlign: "center",
                }}
              >
                <CreditCardOutlined
                  style={{
                    color: "#ffffff",
                    fontSize: "24px",
                    fontWeight: "500",
                  }}
                />
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Thanh Toán An Toàn
                </Text>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  textAlign: "center",
                }}
              >
                <CustomerServiceOutlined
                  style={{
                    color: "#ffffff",
                    fontSize: "24px",
                    fontWeight: "500",
                  }}
                />
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Hỗ Trợ Khách Hàng 24/7
                </Text>
              </div>
            </Col>
          </Row>
        </div>

        <Divider style={{ borderColor: "#757575", marginBottom: "48px" }} />

        {/* Footer Bottom */}
        <div style={{ borderTop: "0.8px solid #757575", paddingTop: "24px" }}>
          <Row justify="space-between" align="middle" gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Text style={{ color: "#ffffff", fontSize: "14px" }}>
                © 2024 PureNest. Bảo lưu mọi quyền. | Chính Sách Bảo Mật | Điều
                Khoản Dịch Vụ
              </Text>
            </Col>
            <Col xs={24} md={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "12px",
                }}
              >
                <Text style={{ color: "#ffffff", fontSize: "14px" }}>
                  Phương Thức Thanh Toán Được Chấp Nhận:
                </Text>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span style={{ fontSize: "14px" }}>💳</span>
                  <span style={{ fontSize: "14px" }}>🏦</span>
                  <span style={{ fontSize: "14px" }}>📱</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
