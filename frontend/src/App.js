import { Routes, Route } from "react-router-dom";
import Register from "./Components/company/register.jsx";
import UserRegister from "./Components/company/register.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<p />}>
        <Route path="test" element={<p />} />
        <Route path="tasks" element={<p />} />
      </Route>
      <Route path="/company" element={<Register />}>
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/user" element={<p />}>
        <Route path="register" element={<UserRegister />} />
      </Route>
      <Route path="about" element={<p />} />
    </Routes>
  );
}

export default App;
