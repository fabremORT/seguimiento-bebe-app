import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../../pages/Layout";
import LoginPage from "../../pages/LoginPage";
import RegistrarUsuarioPage from "../../pages/RegistrarUsuarioPage/RegistrarUsuarioPage";

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
				<Route path="/" element={<Layout />} />
			</Routes>
		</div>
	);
}

export default App;
