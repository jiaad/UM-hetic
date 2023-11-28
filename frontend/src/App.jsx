import { Routes, Route } from "react-router-dom"
import Register from "./Components/company/register.jsx"
import UserRegister from "./Components/company/register.jsx"
import "./App.css"
import Home from "./Components/home/Home.jsx"
import Navbar from "./Components/Navbar.jsx"
import Company from "./Components/company/dashboard.jsx"
import UserIndex from "./Components/user/index.jsx"
import Login from "./Components/company/login.jsx"

function App() {
	return (
		<div className="grid">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="test" element={<p />} />
					<Route path="tasks" element={<p />} />
				</Route>
				<Route path="/company">
					<Route index={true} element={<Company />}></Route>
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
				</Route>
				<Route path="/user">
					<Route index={true} element={<UserIndex />}></Route>
					<Route path="register" element={<UserRegister />} />
				</Route>
				<Route path="about" element={<p />} />
			</Routes>
		</div>
	)
}

export default App
