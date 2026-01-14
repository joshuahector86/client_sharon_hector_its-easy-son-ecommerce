export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
};

export const products: Product[] = [
  {
    id: "book-001",
    title: "The Modern Maker: Design & Practice",
    description:
      "A practical guide to building thoughtful products and workflows. Beautifully bound paperback — perfect as a gift.",
    price: 24.99,
    image: "/assets/book-01.svg",
  },
  {
    id: "poster-001",
    title: "Inspirational Poster",
    description:
      "High-quality print — 18x24 inches — dark-themed inspirational poster.",
    price: 14.0,
    image: "/assets/poster-01.svg",
  },
  {
    id: "sticker-001",
    title: "Logo Sticker Pack",
    description: "Pack of 6 stickers with durable vinyl and matte finish.",
    price: 6.5,
    image: "/assets/stickers-01.svg",
  },
  {
    id: "shirt-001",
    title: "Branded Tee",
    description: "Comfortable dark tee with small chest logo. 100% cotton.",
    price: 28.0,
    image: "/assets/shirt-01.svg",
  },
];

export function findProduct(id: string) {
  return products.find((p) => p.id === id);
}
