const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-accent-cream to-white pt-36 pb-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-dark">
              Pure{" "}
              <span className="bg-gradient-to-r from-primary-gold to-accent-light-gold bg-clip-text text-transparent">
                Bird's Nest
              </span>
              <br />
              For Your Health
            </h1>
            <p className="text-xl text-text-light mb-10 leading-relaxed">
              Experience the ancient secret of beauty and wellness with our
              premium, hand-harvested bird's nest products. Rich in essential
              amino acids, collagen, and nutrients for radiant skin and optimal
              health.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>

            {/* Feature Points */}
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex items-center gap-2 font-medium">
                <span className="text-primary-gold font-bold">✓</span>
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <span className="text-primary-gold font-bold">✓</span>
                <span>Lab Tested</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <span className="text-primary-gold font-bold">✓</span>
                <span>Premium Quality</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80">
              {/* Main Product Showcase */}
              <div className="absolute top-2.5 left-2.5 w-72 h-72 bg-gradient-to-br from-primary-blue to-accent-blue rounded-2xl shadow-2xl flex items-center justify-center text-white font-semibold text-xl z-10">
                Premium Bird's Nest
              </div>

              {/* Glowing Background */}
              <div className="absolute -top-5 -left-5 -right-5 -bottom-5 bg-gradient-to-r from-primary-gold to-accent-light-gold rounded-3xl opacity-30 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute top-0 -right-24 w-96 h-96 bg-gradient-to-r from-primary-gold to-accent-light-gold rounded-full opacity-10 -z-10"></div>
    </section>
  );
};

export default Hero;
