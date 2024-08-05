import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	events: [],
};

export const eventSlice = createSlice({
	name: "events",
	initialState,
	reducers: {
		setEvents: (state, { payload }) => {
			state.events = payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setEvents } = eventSlice.actions;

export default eventSlice.reducer;
