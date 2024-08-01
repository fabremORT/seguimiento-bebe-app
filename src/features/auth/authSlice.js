import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userId: localStorage.getItem("userId"),
	token: localStorage.getItem("token"),
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (state, { payload: { id, apiKey } }) => {
			state.userId = id;
			state.token = apiKey;
			localStorage.setItem("userId", id);
			localStorage.setItem("token", apiKey);
		},
		logout: (state) => {
			localStorage.clear();
			state.userId = null;
			state.token = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
