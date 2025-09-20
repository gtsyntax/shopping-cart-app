import "../styles/Header.css";

function Header(): JSX.Element {
    return (
        <nav className="navbar">
            <div className="logo">Gogo</div>

            <div className="user-ctrls">
                <div className="cart-notification">
                    <button className="cart-button">Cart</button>
                    <div className="badge">3</div>
                </div>
                <button className="dashboard">My Dashboard</button>
            </div>
        </nav>
    )
}

export default Header;