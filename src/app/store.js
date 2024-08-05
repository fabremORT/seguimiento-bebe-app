import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { babyTrackerApi } from "./services/babyTrackerAPI";
import authReducer from "../features/auth/authSlice";
import eventsReducer from "../features/events/eventSlice";

export const store = configureStore({
	reducer: {
		[babyTrackerApi.reducerPath]: babyTrackerApi.reducer,
		auth: authReducer,
		events: eventsReducer,
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(babyTrackerApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
