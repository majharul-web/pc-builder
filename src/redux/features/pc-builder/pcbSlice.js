import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pcb: [],
};

const pcbSlice = createSlice({
  name: "pcb",
  initialState: initialState,
  reducers: {
    addToPcb: (state, action) => {
      const newProduct = action.payload;
      const existingProductIndex = state.pcb.findIndex(
        (product) => product._id === newProduct._id || product.category === newProduct.category
      );

      if (existingProductIndex !== -1) {
        // If the same product and category already exist, replace it with the new payload
        state.pcb[existingProductIndex] = newProduct;
      } else {
        // Otherwise, add the new product to the PCB array
        state.pcb.push(newProduct);
      }
    },
    removeFromPcb: (state, action) => {
      const productIdToRemove = action.payload;
      state.pcb = state.pcb.filter((product) => product._id !== productIdToRemove);
    },

    clearPcb: (state, action) => {
      state.pcb = [];
    },
  },
});

export const { addToPcb, removeFromPcb, clearPcb } = pcbSlice.actions;

export default pcbSlice.reducer;
