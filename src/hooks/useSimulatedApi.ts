import { useCallback, useState } from "react";
import data from "../data.json";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

export function useSimulatedApi() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = useCallback(() => {
        setLoading(true);
        setError(null);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    setProducts(data);
                    setLoading(false);
                    resolve(data);
                } catch (err) {
                    setError(err.message);
                    setLoading(false);
                    reject(err);
                }
            }, 3000)
        });
    }, []);

    return { products, loading, error, fetchProducts };
}