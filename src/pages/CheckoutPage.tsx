import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/lib/cartContext";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const placeOrder = () => {
    setLoading(true);
    setTimeout(() => {
      clear();
      setLoading(false);
      navigate("/");
      // eslint-disable-next-line no-alert
      alert("Order placed — thank you!");
    }, 800);
  };

  return (
    <main className="max-w-4xl mx-auto py-12">
      <h2 className="text-xl font-semibold mb-6">Checkout</h2>
      <div className="bg-card rounded p-4">
        <div className="space-y-3">
          {items.map((it) => (
            <div key={it.id} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{it.title}</div>
                <div className="text-sm text-muted-foreground">
                  {it.quantity} × ${it.price.toFixed(2)}
                </div>
              </div>
              <div className="font-medium">
                ${(it.price * it.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="text-lg font-medium">Total</div>
          <div className="text-lg font-semibold">${subtotal.toFixed(2)}</div>
        </div>
        <div className="mt-6 flex gap-2">
          <Button onClick={() => navigate(-1)} variant="outline">
            Back
          </Button>
          <Button onClick={placeOrder} disabled={loading}>
            {loading ? "Placing…" : "Place order"}
          </Button>
        </div>
      </div>
    </main>
  );
}
