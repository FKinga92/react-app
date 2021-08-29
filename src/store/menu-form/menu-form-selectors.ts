import { RootState } from '../';

export const getEditedMenuId = (state: RootState) => state.menuForm.id;
export const getMenuName = (state: RootState) => state.menuForm.name;
export const getMenuItems = (state: RootState) => state.menuForm.items;
export const getMenuItem = (id: number) => (state: RootState) =>
  state.menuForm.items.find(item => item.id === id);
