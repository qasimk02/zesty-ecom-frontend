import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import CustomerRouters from "./Routers/CustomerRouters";
import AdminRouters from "./Routers/AdminRouters";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./user/components/Error/ErrorPage";

function App() {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();

  return (
    <div className="">
      <ToastContainer />
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
        <Route path="/error/*" element={<ErrorPage />}></Route>
        {auth?.user?.role?.name === "ROLE_ADMIN" && (
          <Route path="/admin/*" element={<AdminRouters />}></Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
