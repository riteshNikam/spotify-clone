import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./darkmodeSlice";

const store = configureStore({
  reducer: {
    darkmodeReducer,
  },
});

export default store;
