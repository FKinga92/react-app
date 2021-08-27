import { RootState } from '../';

const getMenus = (state: RootState) => state.menu.menus;
const getMenu = (id: number) => (state: RootState) => state.menu.menus.find(menu => menu.id === id);

export const menuSelectors = { getMenu, getMenus };
