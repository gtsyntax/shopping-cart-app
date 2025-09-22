import { useEffect } from "react";
import { useSimulatedApi } from "../hooks/useSimulatedApi";
import { useCart } from "../hooks/useCart";
import "../styles/ProductItem.css";

function ProductList(): JSX.Element {
    const { products, loading, error, fetchProducts } = useSimulatedApi();
    const { addToCart } = useCart();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error}</h1>
    return (
        <section className="product-container">
            <h1>Products</h1>
            {products.map((product, index) => (
                <div key={index} className="product-item-container">
                    <div className="product-item-desc">
                        <h3>{product.name}</h3>
                        <p>Category: {product.category}</p> 
                    </div>
                    <p className="product-item-price">${product.price}</p>
                    <button className="product-item-btn" onClick={() => addToCart(product)}>Add To Cart</button>
                </div>
            ))}
        </section>
    )
}

export default ProductList;