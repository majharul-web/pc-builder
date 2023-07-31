import { configureStore } from "@reduxjs/toolkit";
import pcbReducer from "./features/pc-builder/pcbSlice";

const store = configureStore({
  reducer: {
    pcb: pcbReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
