import { AppState } from "../../Types/Store.types";
import { PayloadAction } from "@reduxjs/toolkit";

export const increment = (state: AppState) => {
  state.value += 1;
};

export const decrement = (state: AppState) => {
  state.value -= 1;
};

export const incrementByAmount = (state: AppState, action: PayloadAction<number>) => {
  state.value += action.payload;
};
