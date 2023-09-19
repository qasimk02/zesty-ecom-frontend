import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerRouters from "./Routers/CustomerRouters";
import AdminRouters from "./Routers/AdminRouters";
import { useSelector } from "react-redux";

function App() {
  const { auth } = useSelector((store) => store);
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>

        <Route path="/admin/*" element={<AdminRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
