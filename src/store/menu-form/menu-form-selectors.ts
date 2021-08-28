import { RootState } from '../';

const getEditedMenuId = (state: RootState) => state.menuForm.id;
const getItemName = (state: RootState) => state.menuForm.name;
const getMenuItems = (state: RootState) => state.menuForm.items;
const getMenuItem = (id: number) => (state: RootState) =>
  state.menuForm.items.find(item => item.id === id);

export const menuFormSelectors = { getEditedMenuId, getItemName, getMenuItem, getMenuItems };
