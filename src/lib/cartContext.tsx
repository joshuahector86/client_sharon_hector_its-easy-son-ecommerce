import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, qty: number) => void;
  clear: () => void;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem("cart:v1");
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart:v1", JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (item: Omit<CartItem, "quantity">, qty = 1) => {
    setItems((s) => {
      const found = s.find((it) => it.id === item.id);
      if (found) {
        return s.map((it) =>
          it.id === item.id ? { ...it, quantity: it.quantity + qty } : it
        );
      }
      return [...s, { ...item, quantity: qty }];
    });
  };

  const removeItem = (id: string) =>
    setItems((s) => s.filter((it) => it.id !== id));

  const setQuantity = (id: string, qty: number) =>
    setItems((s) =>
      s
        .map((it) =>
          it.id === id ? { ...it, quantity: Math.max(0, Math.floor(qty)) } : it
        )
        .filter((it) => it.quantity > 0)
    );

  const clear = () => setItems([]);

  const subtotal = items.reduce((s, it) => s + it.price * it.quantity, 0);

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    setQuantity,
    clear,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export type { CartItem };
