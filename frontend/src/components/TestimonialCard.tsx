interface TestimonialCardProps {
  stars: string;
  text: string;
  author: string;
  role: string;
}

const TestimonialCard = ({
  stars,
  text,
  author,
  role,
}: TestimonialCardProps) => {
  return (
    <div className="bg-accent-cream p-10 rounded-2xl card-hover">
      <div className="text-xl mb-6">{stars}</div>
      <p className="text-lg leading-relaxed text-text-dark mb-6 italic">
        "{text}"
      </p>
      <div className="testimonial-author">
        <strong className="text-primary-dark font-bold">{author}</strong>
        <span className="block text-text-light text-sm mt-1">{role}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
