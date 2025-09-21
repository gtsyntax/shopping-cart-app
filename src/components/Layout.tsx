import "../styles/Layout.css";
import CartItemList from "./CartItemList";
import CartSummary from "./CartSummary";

function Layout(): JSX.Element {
    return (
        <main className="layout-container">
            <section className="layout-left">
                <CartItemList />
            </section>
            <section className="layout-right">
                <CartSummary />
            </section>
        </main>
    )
}

export default Layout;