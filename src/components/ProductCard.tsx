import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { Button } from "./ui/button";
import { useCart } from "@/lib/cartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="w-full max-w-xs rounded-md bg-card p-4 shadow-sm">
      <Link to={`/product/${product.id}`} className="block">
        <div className="h-40 mb-3 bg-neutral-800 rounded overflow-hidden flex items-center justify-center">
          {product.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full"
            />
          ) : (
            <div className="text-sm text-muted-foreground">No image</div>
          )}
        </div>
      </Link>
      <div className="mb-3">
        <h3 className="text-sm font-medium">{product.title}</h3>
        <p className="text-xs text-muted-foreground mt-1">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <div className="flex gap-2">
        <Link to={`/product/${product.id}`} className="flex-1">
          <Button variant="outline" size="sm">
            View
          </Button>
        </Link>
        <Button
          size="sm"
          onClick={() =>
            addItem({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
            })
          }
        >
          Add
        </Button>
      </div>
    </article>
  );
}
