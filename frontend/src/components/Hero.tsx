import { Button, Row, Col, Typography } from "antd";
import {
  ShoppingCartOutlined,
  PlayCircleOutlined,
  StarFilled,
  SafetyCertificateOutlined,
  TruckOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <>
      {/* Add CSS animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        
        @keyframes float1 {
          0%, 100% {
            transform: translateY(0px) rotate(-5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }
        
        @keyframes float2 {
          0%, 100% {
            transform: translateY(0px) rotate(8deg);
          }
          50% {
            transform: translateY(-8px) rotate(8deg);
          }
        }
        
        @keyframes float3 {
          0%, 100% {
            transform: translateY(0px) rotate(-3deg);
          }
          50% {
            transform: translateY(-12px) rotate(-3deg);
          }
        }
        
        .grain-bg {
          background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grain' width='4' height='4' patternUnits='userSpaceOnUse'><circle cx='2' cy='2' r='0.3' fill='%23D4A574' opacity='0.1'/></pattern></defs><rect width='100' height='100' fill='url(%23grain)'/></svg>");
        }
        
        .float1 {
          animation: float1 7s ease-in-out infinite;
        }
        
        .float2 {
          animation: float2 8s ease-in-out infinite;
        }
        
        .float3 {
          animation: float3 6s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulse 3s ease infinite;
        }
      `}</style>

      <section
        style={{
          alignItems: "center",
          backgroundImage:
            "linear-gradient(135deg, rgb(255, 248, 240) 0%, rgb(245, 230, 211) 100%)",
          display: "flex",
          fontFamily: '"Playfair Display", "Times New Roman", serif',
          minHeight: "600px",
          overflowX: "hidden",
          overflowY: "hidden",
          position: "relative",
          backgroundColor: "rgb(255, 255, 255)",
        }}
      >
        {/* Background Pattern */}
        <div
          className="grain-bg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgba(212, 165, 116, 0.1) 0%, rgba(255, 248, 240, 0.3) 100%)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </div>

        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1200px",
            paddingBottom: "80px",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "80px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
              gap: "32px",
              marginLeft: "-24px",
              marginRight: "-24px",
            }}
          >
            {/* Left Column - Text Content */}
            <div
              style={{
                flexBasis: "50%",
                flexShrink: 0,
                maxWidth: "50%",
                minHeight: "1px",
                paddingLeft: "24px",
                paddingRight: "24px",
                position: "relative",
              }}
            >
              <div style={{ position: "relative" }}>
                {/* Certification Badge */}
                <div
                  style={{
                    alignItems: "center",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderRadius: "24px",
                    boxShadow: "rgba(0, 0, 0, 0.07) 0px 4px 6px 0px",
                    color: "rgb(212, 165, 116)",
                    display: "inline-flex",
                    fontSize: "14px",
                    fontWeight: 600,
                    gap: "8px",
                    marginBottom: "24px",
                    paddingBottom: "8px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    paddingTop: "8px",
                  }}
                >
                  <SafetyCertificateOutlined style={{ fontSize: "14px" }} />
                  <span>Chứng Nhận Cấp AAA Cao Cấp</span>
                </div>

                {/* Main Title */}
                <Title
                  level={1}
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "48px",
                    fontWeight: 700,
                    lineHeight: "57.6px",
                    marginBottom: "24px",
                    color: "rgb(58, 47, 30)",
                  }}
                >
                  <span>Yến Sào </span>
                  <span style={{ color: "rgb(212, 165, 116)" }}>
                    Nguyên Chất
                  </span>
                  <br />
                  <span>cho Sức Khỏe Tối Ưu</span>
                </Title>

                {/* Description */}
                <div
                  style={{
                    color: "rgb(117, 117, 117)",
                    fontSize: "18px",
                    lineHeight: "27px",
                    marginBottom: "18px",
                    maxWidth: "500px",
                  }}
                >
                  Trải nghiệm bí quyết cổ xưa về vẻ đẹp và sức khỏe với yến sào
                  ăn được cao cấp của chúng tôi. Tự nhiên giàu collagen, protein
                  và axit amin thiết yếu cho làn da rạng rỡ và sức sống dồi dào.
                </div>

                {/* Feature Points */}
                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                    marginBottom: "32px",
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      color: "rgb(58, 47, 30)",
                      display: "flex",
                      fontWeight: 500,
                      gap: "8px",
                    }}
                  >
                    <StarFilled style={{ color: "rgb(212, 165, 116)" }} />
                    <span>100% Tự Nhiên & Nguyên Chất</span>
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      color: "rgb(58, 47, 30)",
                      display: "flex",
                      fontWeight: 500,
                      gap: "8px",
                    }}
                  >
                    <TruckOutlined style={{ color: "rgb(212, 165, 116)" }} />
                    <span>Miễn Phí Vận Chuyển Toàn Cầu</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div
                  style={{
                    alignItems: "center",
                    display: "inline-flex",
                    gap: "24px",
                    marginBottom: "32px",
                  }}
                >
                  <Button
                    type="primary"
                    size="large"
                    icon={<ShoppingCartOutlined />}
                    style={{
                      alignItems: "center",
                      backgroundColor: "rgb(212, 165, 116)",
                      borderRadius: "10px",
                      border: "0.8px solid rgb(212, 165, 116)",
                      boxShadow: "rgba(255, 172, 5, 0.06) 0px 2px 0px 0px",
                      color: "rgb(255, 255, 255)",
                      display: "inline-flex",
                      fontWeight: 600,
                      gap: "8px",
                      height: "48px",
                      justifyContent: "center",
                      paddingLeft: "32px",
                      paddingRight: "32px",
                    }}
                  >
                    Mua Bộ Sưu Tập Cao Cấp
                  </Button>
                  <Button
                    size="large"
                    icon={<PlayCircleOutlined />}
                    style={{
                      alignItems: "center",
                      backgroundColor: "rgb(255, 255, 255)",
                      borderRadius: "10px",
                      border: "0.8px solid rgb(212, 165, 116)",
                      boxShadow: "rgba(0, 0, 0, 0.02) 0px 2px 0px 0px",
                      color: "rgb(212, 165, 116)",
                      display: "inline-flex",
                      fontWeight: 600,
                      gap: "8px",
                      height: "48px",
                      justifyContent: "center",
                      paddingLeft: "32px",
                      paddingRight: "32px",
                    }}
                  >
                    Xem Câu Chuyện Của Chúng Tôi
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      alignItems: "center",
                      color: "rgb(117, 117, 117)",
                      display: "flex",
                      fontSize: "14px",
                      gap: "8px",
                    }}
                  >
                    ⭐ 4.9/5 từ 2,500+ đánh giá
                  </span>
                  <span
                    style={{
                      alignItems: "center",
                      color: "rgb(117, 117, 117)",
                      display: "flex",
                      fontSize: "14px",
                      gap: "8px",
                    }}
                  >
                    🏆 Chất lượng đạt giải thưởng
                  </span>
                  <span
                    style={{
                      alignItems: "center",
                      color: "rgb(117, 117, 117)",
                      display: "flex",
                      fontSize: "14px",
                      gap: "8px",
                    }}
                  >
                    🔒 Đảm bảo hoàn tiền trong 30 ngày
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Product Image */}
            <div
              style={{
                flexBasis: "50%",
                flexShrink: 0,
                maxWidth: "50%",
                minHeight: "1px",
                paddingLeft: "24px",
                paddingRight: "24px",
                position: "relative",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  height: "500px",
                  justifyContent: "flex-end",
                  marginLeft: "40px",
                  paddingBottom: "60px",
                  paddingLeft: "40px",
                  paddingRight: "80px",
                  paddingTop: "60px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    height: "300px",
                    position: "relative",
                    width: "300px",
                    zIndex: 5,
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      height: "100%",
                      justifyContent: "center",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    {/* Main Bowl Container */}
                    <div
                      style={{
                        alignItems: "center",
                        backgroundImage:
                          "linear-gradient(135deg, rgb(255, 248, 240) 0%, rgb(245, 230, 211) 100%)",
                        borderRadius: "50%",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px 0px",
                        display: "flex",
                        height: "100%",
                        justifyContent: "center",
                        position: "relative",
                        width: "100%",
                        zIndex: 2,
                      }}
                    >
                      {/* Bird's Nest Product */}
                      <div
                        style={{
                          height: "80px",
                          position: "relative",
                          width: "120px",
                        }}
                      >
                        {/* Outer Ring */}
                        <div
                          style={{
                            backgroundImage:
                              "linear-gradient(135deg, rgb(212, 165, 116) 0%, rgb(184, 134, 11) 100%)",
                            borderRadius: "50% / 60% 60% 40% 40%",
                            height: "60px",
                            position: "relative",
                            width: "100%",
                          }}
                        />
                        {/* Inner Ring */}
                        <div
                          style={{
                            backgroundColor: "rgb(245, 230, 211)",
                            borderRadius: "50%",
                            height: "30px",
                            left: "20px",
                            opacity: 0.8,
                            position: "absolute",
                            right: "20px",
                            top: "15px",
                          }}
                        />
                      </div>
                    </div>

                    {/* Pulsing Glow Effect */}
                    <div
                      className="pulse-glow"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, rgb(212, 165, 116) 0%, rgba(0, 0, 0, 0) 70%)",
                        bottom: "-20px",
                        left: "-20px",
                        opacity: 0.2,
                        position: "absolute",
                        right: "-20px",
                        top: "-20px",
                      }}
                    />
                  </div>

                  {/* Floating Benefit Tags */}
                  <div
                    style={{
                      bottom: "-60px",
                      left: "-120px",
                      pointerEvents: "none",
                      position: "absolute",
                      right: "-40px",
                      top: "-60px",
                    }}
                  >
                    {/* Tăng Collagen */}
                    <div
                      className="float1"
                      style={{
                        backdropFilter: "blur(10px)",
                        backgroundImage:
                          "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(255, 248, 240) 100%)",
                        border: "1.6px solid rgb(245, 230, 211)",
                        borderRadius: "24px",
                        boxShadow: "rgba(212, 165, 116, 0.3) 0px 8px 20px 0px",
                        color: "rgb(212, 165, 116)",
                        fontSize: "13px",
                        fontWeight: 600,
                        left: "-100px",
                        paddingBottom: "10px",
                        paddingLeft: "18px",
                        paddingRight: "18px",
                        paddingTop: "10px",
                        position: "absolute",
                        top: "60px",
                        whiteSpace: "nowrap",
                        zIndex: 10,
                      }}
                    >
                      Tăng Collagen
                    </div>

                    {/* Chống Lão Hóa */}
                    <div
                      className="float2"
                      style={{
                        backdropFilter: "blur(10px)",
                        backgroundImage:
                          "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(255, 248, 240) 100%)",
                        border: "1.6px solid rgb(245, 230, 211)",
                        borderRadius: "24px",
                        boxShadow: "rgba(212, 165, 116, 0.3) 0px 8px 20px 0px",
                        color: "rgb(212, 165, 116)",
                        fontSize: "13px",
                        fontWeight: 600,
                        paddingBottom: "10px",
                        paddingLeft: "18px",
                        paddingRight: "18px",
                        paddingTop: "10px",
                        position: "absolute",
                        right: "-60px",
                        top: "40%",
                        whiteSpace: "nowrap",
                        zIndex: 10,
                      }}
                    >
                      Chống Lão Hóa
                    </div>

                    {/* Hỗ Trợ Miễn Dịch */}
                    <div
                      className="float3"
                      style={{
                        backdropFilter: "blur(10px)",
                        backgroundImage:
                          "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(255, 248, 240) 100%)",
                        border: "1.6px solid rgb(245, 230, 211)",
                        borderRadius: "24px",
                        bottom: "80px",
                        boxShadow: "rgba(212, 165, 116, 0.3) 0px 8px 20px 0px",
                        color: "rgb(212, 165, 116)",
                        fontSize: "13px",
                        fontWeight: 600,
                        left: "-70px",
                        paddingBottom: "10px",
                        paddingLeft: "18px",
                        paddingRight: "18px",
                        paddingTop: "10px",
                        position: "absolute",
                        whiteSpace: "nowrap",
                        zIndex: 10,
                      }}
                    >
                      Hỗ Trợ Miễn Dịch
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
