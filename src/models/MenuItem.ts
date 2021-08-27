import { generateId } from '../utils/util';

export interface MenuItem {
  id: number;
  name: string;
  price: string;
}

export const getEmptyMenuItem = (): MenuItem => ({ id: generateId(), name: '', price: '0' });
