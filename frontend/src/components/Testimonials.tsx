import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      stars: "⭐⭐⭐⭐⭐",
      text: "I've been using PureNest for 6 months and my skin has never looked better. The quality is exceptional and I feel more energetic every day.",
      author: "Sarah Chen",
      role: "Verified Customer",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      text: "As a busy professional, the ready-to-drink option is perfect for me. Great taste and I definitely notice the health benefits.",
      author: "Michael Wong",
      role: "Verified Customer",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      text: "The gift set was perfect for my mother's birthday. She loves the quality and the beautiful packaging made it extra special.",
      author: "Lisa Kim",
      role: "Verified Customer",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              stars={testimonial.stars}
              text={testimonial.text}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
