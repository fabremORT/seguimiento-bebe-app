import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	events: [],
};

export const eventSlice = createSlice({
	name: "event",
	initialState,
	reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default eventSlice.reducer;
