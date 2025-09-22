import "../styles/Layout.css";
import CartItemList from "./CartItemList";
import CartSummary from "./CartSummary";
import ProductList from "./ProductList";

function Layout(): JSX.Element {
    return (
        <main className="layout-container">
            <section className="layout-left">
                <ProductList />
                <CartItemList />
            </section>
            <section className="layout-right">
                <CartSummary />
            </section>
        </main>
    )
}

export default Layout;