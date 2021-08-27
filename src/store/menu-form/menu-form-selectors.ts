import { RootState } from '../';

const getItem = (state: RootState) => state.menuForm.currentItem;
const getMenuItem = (id: number) => (state: RootState) =>
  state.menuForm.currentItem?.items.find(item => item.id === id);

export const menuFormSelectors = { getItem, getMenuItem };
