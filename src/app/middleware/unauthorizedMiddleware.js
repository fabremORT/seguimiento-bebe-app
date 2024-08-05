// middleware/unauthorizedMiddleware.js
import { createListenerMiddleware } from "@reduxjs/toolkit";
import { babyTrackerApi } from "../services/babyTrackerAPI";

const unauthorizedMiddleware = createListenerMiddleware();

unauthorizedMiddleware.startListening({
	matcher: (action) =>
		babyTrackerApi.endpoints[action.meta?.arg?.endpointName]?.matchFulfilled(
			action
		) ||
		babyTrackerApi.endpoints[action.meta?.arg?.endpointName]?.matchRejected(
			action
		),
	effect: async (action, listenerApi) => {
		if (action.payload.status === 401) {
			// Redirecciona al login
			listenerApi.dispatch({ type: "auth/logout" });
			window.location.href = "/login";
		}
	},
});

export default unauthorizedMiddleware;
