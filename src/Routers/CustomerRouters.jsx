import { Route, Routes } from "react-router-dom";
import Navigation from "../user/components/Navigation/Navigation";
import HomePage from "../user/pages/HomePage";
import Cart from "../user/pages/Cart";
import ProductPage from "../user/pages/ProductPage";
import ProductDetailsPage from "../user/pages/ProductDetailsPage";
import Checkout from "../user/pages/Checkout";
import Order from "../user/pages/Order";
import Footer from "../user/components/Footer/Footer";
import OrderDetails from "../user/pages/OrderDetails";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<ProductPage />}
        ></Route>
        <Route
          path="/product/:productId"
          element={<ProductDetailsPage />}
        ></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default CustomerRouters;
