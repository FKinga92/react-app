import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./menu";

const store = configureStore({ reducer: menuReducer });
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
