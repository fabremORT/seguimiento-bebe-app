import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "../../pages/LoginPage";
import Layout from "../../pages/Layout";

function App() {
	return (
		<div
			style={{
				height: "100%",
			}}
		>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<Layout />} />
			</Routes>
		</div>
	);
}

export default App;
