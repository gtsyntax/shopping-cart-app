import "../styles/CartItem.css"

function CartItem(): JSX.Element {
    return (
        <div className="cart-item-container">
            <div className="cart-item-desc">
                <h3>Aero Armour Retro Chopper HOP 8-BIT T-Shirt</h3>
                <p>Category: Men</p> 
            </div>

            <div className="cart-item-qty">
                <button className="cart-item-btn"> - </button>
                <p><strong>2</strong></p>
                <button className="cart-item-btn"> + </button>
            </div>

            <div className="cart-item-price">
                <p>$799</p>
            </div>

            <button className="cart-item-btn">Add To Cart</button>
        </div>
    )
}

export default CartItem;