import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./user/components/Footer/Footer";
import "./user/components/Navigation/Navigation";
import Navigation from "./user/components/Navigation/Navigation";
import Cart from "./user/pages/Cart";
import Checkout from "./user/pages/Checkout";
import HomePage from "./user/pages/HomePage";
import Order from "./user/pages/Order";
import ProductDetailsPage from "./user/pages/ProductDetailsPage";
import ProductPage from "./user/pages/ProductPage";
import CustomerRouters from "./Routers/CustomerRouters";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>
      {/* <Navigation /> */}
      <div>
        {/* <HomePage /> */}
        {/* <ProductPage /> */}
        {/* <ProductDetailsPage /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Order /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
