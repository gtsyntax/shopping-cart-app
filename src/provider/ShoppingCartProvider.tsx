import { createContext, useState } from "react";

interface CartItem {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: {id: number, name: string, category: string, price: number}) => void;
    removeFromCart: (id: number) => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function ShoppingCartProvider({ children }: { children: ReactNode}) {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (product: {id: number, name: string, category: string, price: number}) => {
        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                return prevItems.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            } else {
                return [...prevItems, { ...product, quantity: 1}];
            }
        });
    }

    const removeFromCart = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    const getTotalItems = () => {
        return items.reduce((total, item) => total + item.quantity, 0);
    }

    const getTotalPrice = () => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    const value = {
        items,
        addToCart,
        removeFromCart,
        getTotalItems,
        getTotalPrice
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}