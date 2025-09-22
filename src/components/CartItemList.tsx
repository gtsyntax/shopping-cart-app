import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

function CartItemList(): JSX.Element {
    const { items, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
    return (
        <div>
            <h1>Cart</h1>
            {items.map((item, index) => (
                <CartItem 
                    item={item} 
                    key={item.id} 
                    removeFromCart={removeFromCart}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                />
            ))}
        </div>
    )
}

export default CartItemList;