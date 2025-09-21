import "../styles/CartSummary.css";

function CartSummary(): JSX.Element {
    return (
        <section className="cart-summary">
            <h3>Order Summary</h3>
            <p><strong>Total:</strong> $8930</p>
            <button className="cart-summary-btn">Checkout</button>
        </section>
    )
}

export default CartSummary;