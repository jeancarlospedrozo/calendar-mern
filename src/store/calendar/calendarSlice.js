import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvents = {
  _id: new Date().getTime(),
  title: "Cumpleaños",
  notes: "Comprar la decoración",
  startDate: new Date(),
  endDate: addHours(new Date(), 2),
  user: {
    _id: "1",
    name: "Jean Carlos",
  },
};

const initialState = {
  events: [tempEvents],
  activeEvent: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    onSetActiveEvent: (state, action) => {
      state.activeEvent = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice.actions;

export default calendarSlice.reducer;
