import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvents = {
  title: "Cumpleaños",
  note: "Comprar la decoración",
  start: new Date(),
  end: addHours(new Date(), 1),
  user: {
    id: "1",
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
    onDateModalOpen: (state) => {
      state.isDateModalOpen = true;
    },
    onDateModalClose: (state) => {
      state.isDateModalOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onDateModalOpen, onDateModalClose } = calendarSlice.actions;

export default calendarSlice.reducer;
