import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      name: "Premium Raw Bird's Nest",
      description:
        "Hand-picked cave bird's nest, perfect for traditional preparation",
      price: "$299",
      priceUnit: "/ 50g",
      featured: true,
      badge: "Bestseller",
      placeholder: "Raw Bird's Nest",
    },
    {
      name: "Ready-to-Drink Bird's Nest",
      description: "Convenient bottled bird's nest with rock sugar",
      price: "$89",
      priceUnit: "/ 6 bottles",
      placeholder: "Ready-to-Drink",
    },
    {
      name: "Luxury Gift Set",
      description: "Elegant packaging perfect for special occasions",
      price: "$499",
      priceUnit: "/ set",
      placeholder: "Gift Set",
    },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Premium Collection</h2>
          <p className="section-subtitle">
            Carefully sourced and processed to preserve maximum nutritional
            value
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              price={product.price}
              priceUnit={product.priceUnit}
              featured={product.featured}
              badge={product.badge}
              placeholder={product.placeholder}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
