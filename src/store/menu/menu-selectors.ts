import { RootState } from '../';

export const getMenus = (state: RootState) => state.menu.menus;
export const getMenu = (id: number) => (state: RootState) =>
  state.menu.menus.find(menu => menu.id === id);
