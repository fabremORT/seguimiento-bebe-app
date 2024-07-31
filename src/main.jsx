import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/AppComponent";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<MantineProvider>
				<Provider store={store}>
					<App />
				</Provider>
			</MantineProvider>
		</BrowserRouter>
	</React.StrictMode>
);
