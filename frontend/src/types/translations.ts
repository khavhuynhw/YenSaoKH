export interface Translation {
  // Header
  header: {
    home: string;
    products: string;
    healthBenefits: string;
    aboutUs: string;
    contact: string;
    cart: string;
    account: string;
    phone: string;
    brandTagline: string;
  };

  // Hero Section
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    feature1: string;
    feature2: string;
    ctaButton: string;
    watchVideo: string;
    trustIndicator1: string;
    trustIndicator2: string;
    trustIndicator3: string;
    floatingBubble1: string;
    floatingBubble2: string;
    floatingBubble3: string;
  };

  // Products Section
  products: {
    title: string;
    description: string;
    viewAll: string;
    addToCart: string;
    quickView: string;
    inStock: string;
    outOfStock: string;
    discount: string;
    reviews: string;
    // Product specific
    product1: {
      name: string;
      description: string;
      category: string;
      benefits: string[];
    };
    product2: {
      name: string;
      description: string;
      category: string;
      benefits: string[];
    };
    product3: {
      name: string;
      description: string;
      category: string;
      benefits: string[];
    };
    product4: {
      name: string;
      description: string;
      category: string;
      benefits: string[];
    };
  };

  // Benefits Section
  benefits: {
    title: string;
    description: string;
    certificationTitle: string;
    nutritionTitle: string;
    scienceTitle: string;
    scienceDescription: string;
    // Individual benefits
    benefit1: {
      title: string;
      description: string;
    };
    benefit2: {
      title: string;
      description: string;
    };
    benefit3: {
      title: string;
      description: string;
    };
    benefit4: {
      title: string;
      description: string;
    };
    benefit5: {
      title: string;
      description: string;
    };
    benefit6: {
      title: string;
      description: string;
    };
    // Certifications
    cert1: {
      title: string;
      subtitle: string;
    };
    cert2: {
      title: string;
      subtitle: string;
    };
    cert3: {
      title: string;
      subtitle: string;
    };
    // Nutrition facts
    nutrition: {
      protein: string;
      collagen: string;
      aminoAcids: string;
      minerals: string;
    };
    // Statistics
    stats: {
      satisfaction: string;
      skinImprovement: string;
      energyLevels: string;
    };
  };

  // Testimonials Section
  testimonials: {
    title: string;
    description: string;
    stats: {
      customers: string;
      rating: string;
      repurchase: string;
      countries: string;
    };
  };

  // Footer
  footer: {
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      subscribe: string;
      privacy: string;
    };
    quickLinks: {
      title: string;
      allProducts: string;
      healthBenefits: string;
      aboutUs: string;
      qualityAssurance: string;
      preparationGuide: string;
      healthBlog: string;
    };
    customerCare: {
      title: string;
      contact: string;
      shipping: string;
      returns: string;
      faq: string;
      track: string;
      wholesale: string;
    };
    contact: {
      title: string;
      phone: string;
      phoneHours: string;
      email: string;
      emailLabel: string;
      address: string;
      addressLabel: string;
    };
    trustBadges: {
      quality: string;
      shipping: string;
      payment: string;
      support: string;
    };
    bottom: {
      copyright: string;
      privacy: string;
      terms: string;
      paymentMethods: string;
    };
  };

  // Common
  common: {
    loading: string;
    error: string;
    retry: string;
    close: string;
    back: string;
    next: string;
    previous: string;
    save: string;
    cancel: string;
    confirm: string;
    delete: string;
    edit: string;
    view: string;
    more: string;
    less: string;
    search: string;
    filter: string;
    sort: string;
    menu: string;
    language: string;
  };
}

export type Language = "en" | "vi";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}
