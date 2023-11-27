import { Routes, Route } from "react-router-dom";
import Register from "./Components/company/register.jsx";
import UserRegister from "./Components/company/register.jsx";
import "./App.css";
import Home from "./Components/home/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import CompanyIndex from "./Components/company/index.jsx";
import UserIndex from "./Components/user/index.jsx";

function App() {
  return (
    <div className="grid">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="test" element={<p />} />
          <Route path="tasks" element={<p />} />
        </Route>
        <Route path="/company" element={<CompanyIndex />}>
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/user" element={<UserIndex />}>
          <Route path="register" element={<UserRegister />} />
        </Route>
        <Route path="about" element={<p />} />
      </Routes>
    </div>
  );
}

export default App;
