import { Row, Col, Typography } from "antd";
import TestimonialCard from "./TestimonialCard";

const { Title } = Typography;

const Testimonials = () => {
  const testimonials = [
    {
      stars: 5,
      text: "I've been using PureNest for 6 months and my skin has never looked better. The quality is exceptional and I feel more energetic every day.",
      author: "Sarah Chen",
      role: "Verified Customer",
    },
    {
      stars: 5,
      text: "As a busy professional, the ready-to-drink option is perfect for me. Great taste and I definitely notice the health benefits.",
      author: "Michael Wong",
      role: "Verified Customer",
    },
    {
      stars: 5,
      text: "The gift set was perfect for my mother's birthday. She loves the quality and the beautiful packaging made it extra special.",
      author: "Lisa Kim",
      role: "Verified Customer",
    },
  ];

  return (
    <section style={{ padding: "96px 0", background: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <Title
            level={2}
            style={{
              fontSize: "2.5rem",
              color: "#1a1a2e",
              marginBottom: "16px",
            }}
          >
            What Our Customers Say
          </Title>
        </div>

        {/* Testimonials Grid */}
        <Row gutter={[32, 32]}>
          {testimonials.map((testimonial, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <TestimonialCard
                stars={testimonial.stars}
                text={testimonial.text}
                author={testimonial.author}
                role={testimonial.role}
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Testimonials;
