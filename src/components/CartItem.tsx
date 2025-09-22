import "../styles/CartItem.css"

function CartItem({item, removeFromCart, incrementQuantity, decrementQuantity}): JSX.Element {
    return (
        <div className="cart-item-container">
            <div className="cart-item-desc">
                <h3>{item.name}</h3>
                <p>Category: {item.category}</p> 
            </div>

            <div className="cart-item-qty">
                <button className="cart-item-btn" onClick={() => decrementQuantity(item.id)}> - </button>
                <p><strong>{item.quantity}</strong></p>
                <button className="cart-item-btn" onClick={() => incrementQuantity(item.id)}> + </button>
            </div>

            <div className="cart-item-price">
                <p>${item.price * item.quantity}</p>
            </div>

            <button className="cart-item-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
    )
}

export default CartItem;