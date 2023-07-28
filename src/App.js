import "./App.css";
import Footer from "./user/components/Footer/Footer";
import "./user/components/Navigation/Navigation";
import Navigation from "./user/components/Navigation/Navigation";
import Cart from "./user/pages/Cart";
import HomePage from "./user/pages/HomePage";
import ProductDetailsPage from "./user/pages/ProductDetailsPage";
import ProductPage from "./user/pages/ProductPage";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <ProductPage /> */}
        {/* <ProductDetailsPage /> */}
        <Cart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
