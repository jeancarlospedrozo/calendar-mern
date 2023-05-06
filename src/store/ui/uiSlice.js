import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDateModalOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    increment: (state) => {
      state.isDateModalOpen = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = uiSlice.actions;

export default uiSlice.reducer;
