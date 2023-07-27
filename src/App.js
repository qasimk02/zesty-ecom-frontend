import "./App.css";
import Footer from "./user/components/Footer/Footer";
import "./user/components/Navigation/Navigation";
import Navigation from "./user/components/Navigation/Navigation";
import HomePage from "./user/pages/HomePage";
import ProductPage from "./user/pages/ProductPage";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <ProductPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
