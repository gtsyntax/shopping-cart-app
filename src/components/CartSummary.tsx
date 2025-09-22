import { useCart } from "../hooks/useCart";
import "../styles/CartSummary.css";

function CartSummary(): JSX.Element {
    const {getTotalPrice} = useCart()
    return (
        <section className="cart-summary">
            <h3>Order Summary</h3>
            <p><strong>Total:</strong> ${getTotalPrice()}</p>
            <button className="cart-summary-btn">Checkout</button>
        </section>
    )
}

export default CartSummary;