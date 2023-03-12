import { createSlice } from "@reduxjs/toolkit";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../Helpers/Reducers/user.reducer";

const initialState = {
  value: 0,
};

const appSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment,
    decrement,
    incrementByAmount,
  },
});

export const {
  increment: incrementAction,
  decrement: decrementAction,
  incrementByAmount: incrementByAmountAction,
} = appSlice.actions;

export default appSlice.reducer;
