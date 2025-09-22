import { useContext } from "react";
import { CartContext } from "../provider/ShoppingCartProvider";

export function useCart() {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error("useCart must be used within a ShoppingCartProvider");
    }

    return context;
}