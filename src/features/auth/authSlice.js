import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: localStorage.getItem("user"),
	token: localStorage.getItem("token"),
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, { payload: { user, token } }) => {
			state.user = user;
			state.token = token;
			localStorage.setItem("user", user);
			localStorage.setItem("token", token);
		},
		logout: (state) => {
			localStorage.clear();
			state.user = null;
			state.token = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
