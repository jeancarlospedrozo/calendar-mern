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
    setActiveEvent: (state, action) => {
      state.activeEvent = action.payload;
    },
    addNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    updateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          return payload;
        }
        return event;
      });
    },
    deleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveEvent, addNewEvent, updateEvent, deleteEvent } =
  calendarSlice.actions;

export default calendarSlice.reducer;
