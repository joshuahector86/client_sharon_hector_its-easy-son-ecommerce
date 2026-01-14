import { Link } from "react-router-dom";
import { useCart } from "@/lib/cartContext";
import { Button } from "./ui/button";

export default function Header() {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="w-full border-b border-border bg-card px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="text-lg font-semibold">
          It's Easy Son
        </Link>
        <nav className="flex items-center gap-3">
          <Link to="/" className="text-sm opacity-90 hover:opacity-100">
            Home
          </Link>

          <Link to="/cart">
            <Button variant="ghost" size="sm">
              Cart {count > 0 ? `(${count})` : ""}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
