import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import UserModule from "./modules/UserModule";
import ProductModule from "./modules/ProductModule";
import OrderModule from "./modules/OrderModule";
import ReportModule from "./modules/ReportModule";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<UserModule />} />
          <Route path="/products" element={<ProductModule />} />
          <Route path="/orders" element={<OrderModule />} />
          <Route path="/reports" element={<ReportModule />} />
          {/* Add more routes for other modules */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
