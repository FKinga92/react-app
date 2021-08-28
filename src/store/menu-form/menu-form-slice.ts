import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Menu } from '../../models/Menu';
import { MenuItem } from '../../models/MenuItem';

interface FormInput {
  value: string;
  isTouched: boolean;
  isValid: boolean;
}

export interface MenuItemForm {
  id: number;
  name: FormInput;
  price: FormInput;
}

interface MenuFormState {
  id: number;
  name: FormInput;
  items: MenuItemForm[];
}

const initialState: MenuFormState = {
  id: 0,
  name: { value: '', isTouched: false, isValid: false },
  items: [],
};

const findMenuItemById = (items: MenuItemForm[], id: number) => {
  return items.find(item => item.id === id);
};

const updateMenuItemForm = (items: MenuItemForm[], id: number, property: Partial<MenuItemForm>) => {
  const menuItem = findMenuItemById(items, id);
  if (!menuItem) {
    return;
  }
  return Object.assign(menuItem, property);
};

const validateName = (name: string) => {
  return name !== '';
};

const validatePrice = (price: string) => {
  return price !== '' && parseInt(price) > 0;
};

const menuFormSlice = createSlice({
  name: 'menuForm',
  initialState,
  reducers: {
    setCurrentItem: (state, action: PayloadAction<{ item: Menu }>) => {
      const { id, name, items } = action.payload.item;
      state.id = id;
      state.name = { value: name, isTouched: false, isValid: validateName(name) };
      state.items = items.map(item => ({
        id: item.id,
        name: { value: item.name, isTouched: false, isValid: validateName(item.name) },
        price: { value: item.price, isTouched: false, isValid: validatePrice(item.price) },
      }));
    },
    clear: state => {
      state = { ...initialState };
    },
    updateName: (state, action: PayloadAction<{ name: string }>) => {
      const name = action.payload.name;
      state.name.value = name;
      state.name.isValid = validateName(name);
    },
    setMenuNameIsTouched: (state, action: PayloadAction<{ isTouched: boolean }>) => {
      state.name.isTouched = action.payload.isTouched;
    },
    addEmptyMenuItem: (state, action: PayloadAction<{ item: MenuItem }>) => {
      const item = action.payload.item;
      state.items.push({
        id: item.id,
        name: { value: item.name, isTouched: false, isValid: false },
        price: { value: item.price, isTouched: false, isValid: false },
      });
    },
    updateMenuItemName: (state, action: PayloadAction<{ itemId: number; name: string }>) => {
      const { itemId, name } = action.payload;
      updateMenuItemForm(state.items, itemId, {
        name: { value: name, isValid: validateName(name), isTouched: true },
      });
    },
    setMenuItemNameIsTouched: (
      state,
      action: PayloadAction<{ itemId: number; isTouched: boolean }>
    ) => {
      const { itemId, isTouched } = action.payload;
      const menuItem = findMenuItemById(state.items, itemId);
      if (menuItem) {
        menuItem.name.isTouched = isTouched;
      }
    },
    updateMenuItemPrice: (state, action: PayloadAction<{ itemId: number; price: string }>) => {
      const { itemId, price } = action.payload;
      updateMenuItemForm(state.items, itemId, {
        price: { value: price, isValid: validatePrice(price), isTouched: true },
      });
    },
    setMenuItemPriceIsTouched: (
      state,
      action: PayloadAction<{ itemId: number; isTouched: boolean }>
    ) => {
      const { itemId, isTouched } = action.payload;
      const menuItem = findMenuItemById(state.items, itemId);
      if (menuItem) {
        menuItem.price.isTouched = isTouched;
      }
    },
    deleteMenuItem: (state, action: PayloadAction<{ itemId: number }>) => {
      state.items = state.items.filter(item => item.id !== action.payload.itemId);
    },
    setAllTouched: state => {
      state.name.isTouched = true;
      state.items.forEach(item => {
        item.name.isTouched = true;
        item.price.isTouched = true;
      });
    },
  },
});

export const menuFormReducer = menuFormSlice.reducer;
export const menuFormActions = menuFormSlice.actions;
