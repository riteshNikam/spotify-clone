import { createSlice } from "@reduxjs/toolkit";

const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState: {
    darkmodeFlag: window.matchMedia("(prefers-color-scheme: dark)").matches,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkmodeFlag = !state.darkmodeFlag;
    },
  },
});

export const { toggleDarkMode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
