import Book from "../assets/book.jpg";
import Poster from "../assets/poster.jpg";
import TShirt from "../assets/tshirt.jpg";

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
    title: "It's Easy Son - Quit Making Things Difficult",
    description:
      "Gerlad Hector's motivational book to help you simplify your life and achieve your goals.",
    price: 24.99,
    image: Book,
  },
  {
    id: "poster-001",
    title: "Inspirational Poster",
    description:
      "High-quality print — 18x24 inches — dark-themed inspirational poster.",
    price: 14.0,
    image: Poster,
  },

  {
    id: "shirt-001",
    title: "It's Easy Son Tee",
    description: "Comfortable cotton t-shirt with the 'It's Easy Son' slogan.",
    price: 28.0,
    image: TShirt,
  },
];

export function findProduct(id: string) {
  return products.find((p) => p.id === id);
}
