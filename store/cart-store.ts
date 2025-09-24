import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  imageUrl: string | null;
  price: number;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
}

export const useCartStore = create<CartStore>()(
  persist((set, get) => ({
    cart: [],

    addItem: (item: CartItem) =>
      set((state: CartStore) => {
        const existing = state.cart.find((i) => i.id === item.id);
        if (existing) {
          return {
            cart: state.cart.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          };
        }
        return { cart: [...state.cart, item] };
      }),
  }))
);
