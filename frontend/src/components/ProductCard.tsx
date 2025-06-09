interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  priceUnit: string;
  featured?: boolean;
  badge?: string;
  placeholder: string;
}

const ProductCard = ({
  name,
  description,
  price,
  priceUnit,
  featured = false,
  badge,
  placeholder,
}: ProductCardProps) => {
  return (
    <div
      className={`card-hover rounded-2xl shadow-lg overflow-hidden relative ${
        featured
          ? "bg-gradient-to-br from-primary-blue to-accent-blue text-white"
          : "bg-white"
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 bg-primary-gold text-white px-4 py-2 rounded-2xl text-sm font-semibold z-10">
          {badge}
        </div>
      )}

      {/* Product Image Placeholder */}
      <div
        className={`h-64 flex items-center justify-center font-semibold text-lg ${
          featured
            ? "bg-white bg-opacity-10 text-white"
            : "bg-accent-cream text-text-light"
        }`}
      >
        <div className="p-8 text-center">{placeholder}</div>
      </div>

      {/* Product Info */}
      <div className="p-8">
        <h3 className="text-xl font-bold mb-3">{name}</h3>
        <p
          className={`mb-6 leading-relaxed ${
            featured ? "text-white text-opacity-80" : "text-text-light"
          }`}
        >
          {description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-3xl font-bold text-primary-gold">{price}</span>
          <span
            className={
              featured ? "text-white text-opacity-70" : "text-text-light"
            }
          >
            {priceUnit}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          className={`w-full py-4 rounded-full text-base font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg ${
            featured
              ? "bg-white text-primary-blue"
              : "bg-gradient-to-r from-primary-gold to-accent-light-gold text-white"
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
