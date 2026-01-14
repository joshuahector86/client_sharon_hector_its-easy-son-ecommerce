import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/lib/cartContext";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { items, setQuantity, removeItem, subtotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <main className="max-w-4xl mx-auto py-12 text-center">
        <p className="mb-4">Your cart is empty.</p>
        <Link to="/">
          <Button>Continue shopping</Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-12">
      <h2 className="text-xl font-semibold mb-6">Your Cart</h2>
      <div className="space-y-4">
        {items.map((it) => (
          <div
            key={it.id}
            className="flex items-center gap-4 bg-card p-4 rounded"
          >
            <div className="w-20 h-20 bg-neutral-800 rounded flex items-center justify-center">
              {it.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={it.image}
                  alt={it.title}
                  className="object-contain w-full"
                />
              ) : (
                <div className="text-xs text-muted-foreground">No image</div>
              )}
            </div>
            <div className="flex-1">
              <div className="font-medium">{it.title}</div>
              <div className="text-sm text-muted-foreground">
                ${it.price.toFixed(2)}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                aria-label="quantity"
                type="number"
                min={1}
                value={it.quantity}
                onChange={(e) => setQuantity(it.id, Number(e.target.value))}
                className="w-16 rounded border border-border bg-background px-2 py-1 text-sm"
              />
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeItem(it.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-lg">Subtotal: ${subtotal.toFixed(2)}</div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Continue
          </Button>
          <Link to="/checkout">
            <Button>Checkout</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
