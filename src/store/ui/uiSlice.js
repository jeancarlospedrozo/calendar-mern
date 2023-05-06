import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDateModalOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
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
export const { onDateModalOpen, onDateModalClose } = uiSlice.actions;

export default uiSlice.reducer;
