import { Route, Routes } from "react-router-dom";
import Admin from "../admin/Admin";
import { useSelector } from "react-redux";

const AdminRouters = () => {
  return (
    <div>
      {console.log("entered")}
      <Routes>
        <Route path="/*" element={<Admin />}></Route>
      </Routes>
    </div>
  );
};
export default AdminRouters;
