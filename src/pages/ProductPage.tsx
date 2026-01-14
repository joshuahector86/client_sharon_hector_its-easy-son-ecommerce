import { useParams, Link } from "react-router-dom";
import { findProduct } from "@/data/products";
import { useCart } from "@/lib/cartContext";
import { Button } from "@/components/ui/button";

export default function ProductPage() {
  const { id } = useParams();
  const product = id ? findProduct(id) : undefined;
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-12">
        <p>Product not found.</p>
        <Link to="/">Back to store</Link>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="h-72 bg-neutral-800 rounded flex items-center justify-center overflow-hidden">
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
        </div>
        <div className="md:col-span-2">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="mt-4 text-muted-foreground">{product.description}</p>
          <div className="mt-6 flex items-center gap-4">
            <div className="text-xl font-medium">
              ${product.price.toFixed(2)}
            </div>
            <Button
              onClick={() =>
                addItem({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
