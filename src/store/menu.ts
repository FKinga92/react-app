import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Menu from "../models/Menu";
import MenuItem from "../models/MenuItem";

const mockMenus: Menu[] = [
  new Menu("Menu1", [
    new MenuItem("grilled cheese", 20),
    new MenuItem("hamburger", 50),
  ]),
  new Menu("Menu2", [
    new MenuItem("mac and cheese", 30),
    new MenuItem("steak", 50),
  ]),
];

const findMenuIndex = (state: MenuState, id: number): number =>
  state.menus.findIndex((menu) => menu.id === id);

interface MenuState {
  menus: Menu[];
}

const initialState: MenuState = {
  menus: mockMenus,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addMenu(state, action: PayloadAction<{ menu: Menu }>) {
      state.menus.push(action.payload.menu);
    },
    updateMenu(state, action: PayloadAction<{ menu: Menu }>) {
      const menuIdx = findMenuIndex(state, action.payload.menu.id);
      if (menuIdx < 0) {
        return;
      }
      state.menus.splice(menuIdx, 1, action.payload.menu);
    },
    deleteMenu(state, action: PayloadAction<{ id: number }>) {
      const menuIdx = findMenuIndex(state, action.payload.id);
      if (menuIdx < 0) {
        return;
      }
      state.menus.splice(menuIdx, 1);
    },
  },
});

export const menuReducer = menuSlice.reducer;
export const menuActions = menuSlice.actions;
