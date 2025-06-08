export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  benefits: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
  image?: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}
