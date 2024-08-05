import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "../../pages/LoginPage";
import RegistrarUsuarioPage from "../../pages/RegistrarUsuarioPage/RegistrarUsuarioPage";
import { PrivateOutlet } from "../PrivateOutlet/PrivateOutlet";
import Dashboard from "../../pages/DashboardPage/Dashboard";

function App() {
	return (
		<div
			style={{
				height: "100%",
			}}
		>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/registerUser" element={<RegistrarUsuarioPage />} />
				<Route path="/" element={<PrivateOutlet />}>
					<Route path="/" element={<Dashboard />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
