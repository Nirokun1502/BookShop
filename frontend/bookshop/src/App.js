import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CustomerRouters from "./Routers/CustomerRouters";
import AdminRouters from "./Routers/AdminRouters";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/*" element={<CustomerRouters />}></Route>
          <Route path="/admin/*" element={<AdminRouters />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
