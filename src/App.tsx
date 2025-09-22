import Header from "./components/Header";
import Layout from "./components/Layout";
import { ShoppingCartProvider } from "./provider/ShoppingCartProvider";

function App() {
  return (
      <ShoppingCartProvider>
        <Header />
        <Layout />
      </ShoppingCartProvider>
  )
}

export default App
