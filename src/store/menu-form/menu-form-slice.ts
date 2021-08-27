import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Menu } from '../../models/Menu';
import { MenuItem } from '../../models/MenuItem';

interface MenuFormState {
  currentItem: Menu | null;
}

const initialState: MenuFormState = {
  currentItem: null,
};

const findMenuItemById = (items: MenuItem[], id: number) => {
  return items.find(item => item.id === id);
};

const updateMenuItem = (items: MenuItem[], id: number, property: Partial<MenuItem>) => {
  const menuItem = findMenuItemById(items, id);
  if (!menuItem) {
    return;
  }
  return Object.assign(menuItem, property);
};

const menuFormSlice = createSlice({
  name: 'menuForm',
  initialState,
  reducers: {
    setCurrentItem: (state, action: PayloadAction<{ item: Menu }>) => {
      state.currentItem = action.payload.item;
    },
    updateName: (state, action: PayloadAction<{ name: string }>) => {
      if (!state.currentItem) {
        return;
      }
      state.currentItem.name = action.payload.name;
    },
    addMenuItem: (state, action: PayloadAction<{ item: MenuItem }>) => {
      if (!state.currentItem) {
        return;
      }
      state.currentItem.items.push(action.payload.item);
    },
    updateMenuItemName: (state, action: PayloadAction<{ id: number; name: string }>) => {
      if (!state.currentItem) {
        return;
      }
      const { id, name } = action.payload;
      updateMenuItem(state.currentItem.items, id, { name });
    },
    updateMenuItemPrice: (state, action: PayloadAction<{ id: number; price: string }>) => {
      if (!state.currentItem) {
        return;
      }
      const { id, price } = action.payload;
      updateMenuItem(state.currentItem.items, id, { price });
    },
  },
});

export const menuFormReducer = menuFormSlice.reducer;
export const menuFormActions = menuFormSlice.actions;
