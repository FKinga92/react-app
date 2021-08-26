import { RootState } from "..";

const getMenus = (state: RootState) => state.menus;
const getMenu = (id: number) => (state: RootState) =>
  state.menus.find((menu) => menu.id === id);

export const menuSelectors = { getMenu, getMenus };
