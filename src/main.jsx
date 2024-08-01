import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/AppComponent";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Notifications } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<MantineProvider>
				<Provider store={store}>
					<Notifications />
					<App />
				</Provider>
			</MantineProvider>
		</BrowserRouter>
	</React.StrictMode>
);
