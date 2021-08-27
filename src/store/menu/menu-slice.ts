import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Menu } from '../../models/Menu';

const mockMenus: Menu[] = [
  {
    id: 1,
    name: 'Menu1',
    items: [
      { name: 'grilled cheese', price: '20', id: 1 },
      { name: 'hamburger', price: '50', id: 2 },
    ],
  },
  {
    id: 2,
    name: 'Menu2',
    items: [
      { name: 'mac and cheese', price: '30', id: 3 },
      { name: 'steak', price: '50', id: 4 },
    ],
  },
];

const findMenuIndex = (state: MenuState, id: number) =>
  state.menus.findIndex(menu => menu.id === id);

interface MenuState {
  menus: Menu[];
}

const initialState: MenuState = {
  menus: mockMenus,
};

const menuSlice = createSlice({
  name: 'menu',
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
