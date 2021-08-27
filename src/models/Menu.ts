import { generateId } from '../utils/util';
import { MenuItem } from './MenuItem';

export interface Menu {
  id: number;
  name: string;
  items: MenuItem[];
}

export const getEmptyMenu = (): Menu => ({ id: generateId(), name: '', items: [] });
