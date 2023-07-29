import { Route, Routes } from "react-router-dom";
import Navigation from "../user/components/Navigation/Navigation";
import HomePage from "../user/pages/HomePage";
import Cart from "../user/pages/Cart";
import ProductPage from "../user/pages/ProductPage";
import ProductDetailsPage from "../user/pages/ProductDetailsPage";
import Checkout from "../user/pages/Checkout";
import Order from "../user/pages/Order";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/productDetails" element={<ProductDetailsPage />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
      <div>
        <footer />
      </div>
    </div>
  );
};
export default CustomerRouters;