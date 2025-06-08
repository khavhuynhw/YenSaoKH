import React from "react";
import { Row, Col, Card, Rate, Typography, Avatar, Carousel } from "antd";
import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useLanguage } from "../contexts/LanguageContext";
import type { Testimonial } from "../types";

const { Title, Paragraph, Text } = Typography;

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();

  // Different testimonials for different languages
  const getTestimonials = (): Testimonial[] => {
    if (language === "vi") {
      return [
        {
          id: "1",
          name: "Chị Lan Anh",
          location: "Hồ Chí Minh, Việt Nam",
          content:
            "Tôi đã sử dụng yến sào NestLux được 6 tháng và sự cải thiện trên làn da thật đáng kinh ngạc. Da tôi sáng hơn và rạng rỡ hơn nhiều so với những năm trước. Chất lượng vượt trội và tôi rất thích bao bì tiện lợi.",
          rating: 5,
          image: "",
        },
        {
          id: "2",
          name: "Chị Minh Thư",
          location: "Hà Nội, Việt Nam",
          content:
            "Là một doanh nhân bận rộn, tôi cần thứ gì đó để tăng cường năng lượng và miễn dịch. Yến sào uống liền đã thực sự thay đổi cuộc sống tôi. Tôi cảm thấy tràn đầy năng lượng và không bị ốm kể từ khi dùng đều đặn.",
          rating: 5,
          image: "",
        },
        {
          id: "3",
          name: "Bác sĩ Thu Hà",
          location: "Đà Nẵng, Việt Nam",
          content:
            "Từ góc độ y khoa, tôi rất ấn tượng với độ tinh khiết và chất lượng của sản phẩm NestLux. Các báo cáo phòng thí nghiệm minh bạch và lợi ích sức khỏe mà bệnh nhân báo cáo phù hợp với các nghiên cứu lâm sàng.",
          rating: 5,
          image: "",
        },
        {
          id: "4",
          name: "Chị Phương Linh",
          location: "Cần Thơ, Việt Nam",
          content:
            "Sau khi sinh con, tôi tìm kiếm những cách tự nhiên để khôi phục năng lượng và sức khỏe. Yến sào đã tuyệt vời trong việc hồi phục. Da tôi trông đẹp hơn cả trước khi mang thai và tôi cảm thấy khỏe mạnh hơn nhiều.",
          rating: 5,
          image: "",
        },
        {
          id: "5",
          name: "Cô Mai Linh",
          location: "Huế, Việt Nam",
          content:
            "Bà tôi luôn kể về lợi ích của yến sào nhưng tôi khá hoài nghi. Sau khi thử NestLux, tôi đã tin! Hướng dẫn chế biến truyền thống giúp tôi làm hoàn hảo và hương vị thật tuyệt vời.",
          rating: 4,
          image: "",
        },
        {
          id: "6",
          name: "Chị Thanh Nga",
          location: "Nha Trang, Việt Nam",
          content:
            "Bộ quà tặng tôi đặt cho mẹ được đóng gói rất đẹp và bà ấy cực kỳ yêu thích. Dịch vụ khách hàng xuất sắc và giao hàng nhanh hơn mong đợi. Rất khuyến nghị cho những dịp đặc biệt.",
          rating: 5,
          image: "",
        },
      ];
    } else {
      return [
        {
          id: "1",
          name: "Sarah Chen",
          location: "Singapore",
          content:
            "I've been using NestLux bird's nest for 6 months and the improvement in my skin is remarkable. My complexion is brighter and more radiant than it's been in years. The quality is exceptional and I love the convenient packaging.",
          rating: 5,
          image: "",
        },
        {
          id: "2",
          name: "Michelle Wong",
          location: "Hong Kong",
          content:
            "As a busy executive, I needed something to boost my energy and immunity. The ready-to-drink bird's nest has been a game-changer. I feel more energetic and haven't been sick since I started taking it regularly.",
          rating: 5,
          image: "",
        },
        {
          id: "3",
          name: "Dr. Amanda Liu",
          location: "Toronto, Canada",
          content:
            "From a medical perspective, I'm impressed with the purity and quality of NestLux products. The lab reports are transparent and the health benefits my patients report are consistent with clinical research.",
          rating: 5,
          image: "",
        },
        {
          id: "4",
          name: "Jennifer Kim",
          location: "Los Angeles, USA",
          content:
            "After my pregnancy, I was looking for natural ways to restore my energy and health. Bird's nest has been incredible for my recovery. My skin looks better than before pregnancy and I feel so much stronger.",
          rating: 5,
          image: "",
        },
        {
          id: "5",
          name: "Grace Tan",
          location: "Malaysia",
          content:
            "My grandmother always told me about bird's nest benefits, but I was skeptical. After trying NestLux, I'm a believer! The traditional preparation guide helped me make it perfectly, and the taste is amazing.",
          rating: 4,
          image: "",
        },
        {
          id: "6",
          name: "Rachel Zhang",
          location: "Sydney, Australia",
          content:
            "The gift set I ordered for my mother was beautifully packaged and she absolutely loves it. The customer service was exceptional and delivery was faster than expected. Highly recommend for special occasions.",
          rating: 5,
          image: "",
        },
      ];
    }
  };

  const testimonials = getTestimonials();

  const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
    testimonial,
  }) => (
    <Card className="testimonial-card">
      <div className="testimonial-content">
        <div className="quote-mark">"</div>
        <Paragraph className="testimonial-text">
          {testimonial.content}
        </Paragraph>
        <Rate
          disabled
          defaultValue={testimonial.rating}
          className="testimonial-rating"
        />
      </div>

      <div className="testimonial-author">
        <Avatar size={48} icon={<UserOutlined />} className="author-avatar" />
        <div className="author-info">
          <Text strong className="author-name">
            {testimonial.name}
          </Text>
          <Text type="secondary" className="author-location">
            {testimonial.location}
          </Text>
        </div>
      </div>
    </Card>
  );

  // Custom arrow components for carousel
  const CustomArrow: React.FC<{
    direction: "left" | "right";
    onClick?: () => void;
  }> = ({ direction, onClick }) => (
    <div className={`custom-arrow ${direction}`} onClick={onClick}>
      {direction === "left" ? <LeftOutlined /> : <RightOutlined />}
    </div>
  );

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <Title level={2} className="section-title">
            {t.testimonials.title}
          </Title>
          <Paragraph className="section-description">
            {t.testimonials.description}
          </Paragraph>
        </div>

        {/* Desktop View - Grid */}
        <div className="testimonials-grid desktop-only">
          <Row gutter={[24, 24]}>
            {testimonials.slice(0, 6).map((testimonial) => (
              <Col xs={24} md={12} lg={8} key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </Col>
            ))}
          </Row>
        </div>

        {/* Mobile View - Carousel */}
        <div className="testimonials-carousel mobile-only">
          <Carousel
            autoplay
            autoplaySpeed={4000}
            dots={true}
            arrows
            prevArrow={<CustomArrow direction="left" />}
            nextArrow={<CustomArrow direction="right" />}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Trust Statistics */}
        <div className="trust-stats">
          <Row gutter={[32, 32]} justify="center">
            <Col xs={12} sm={6}>
              <div className="stat-item">
                <Title level={2} className="stat-number">
                  2,500+
                </Title>
                <Text className="stat-label">
                  {t.testimonials.stats.customers}
                </Text>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="stat-item">
                <Title level={2} className="stat-number">
                  4.9★
                </Title>
                <Text className="stat-label">
                  {t.testimonials.stats.rating}
                </Text>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="stat-item">
                <Title level={2} className="stat-number">
                  98%
                </Title>
                <Text className="stat-label">
                  {t.testimonials.stats.repurchase}
                </Text>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="stat-item">
                <Title level={2} className="stat-number">
                  15+
                </Title>
                <Text className="stat-label">
                  {t.testimonials.stats.countries}
                </Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
