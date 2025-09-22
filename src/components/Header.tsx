import { useCart } from "../hooks/useCart";
import "../styles/Header.css";

function Header(): JSX.Element {
    const {getTotalItems} = useCart();
    return (
        <nav className="navbar">
            <div className="logo">Gogo</div>

            <div className="user-ctrls">
                <div className="cart-notification">
                    <button className="cart-button">Cart</button>
                    <div className="badge">{getTotalItems()}</div>
                </div>
                <button className="dashboard">My Dashboard</button>
            </div>
        </nav>
    )
}

export default Header;