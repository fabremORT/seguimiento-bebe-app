import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categories: [],
};

export const mastersSlice = createSlice({
	name: "masters",
	initialState,
	reducers: {
		setCategories: (state, { payload }) => {
			state.categories = payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCategories } = mastersSlice.actions;

export default mastersSlice.reducer;
