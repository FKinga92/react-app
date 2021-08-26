import { generateId } from "../utils/util";
import MenuItem from "./MenuItem";

export default class Menu {
  public readonly id: number;
  public readonly name: string;
  public readonly items: MenuItem[];

  constructor(name: string, items: MenuItem[]) {
    this.name = name;
    this.items = items ?? [];
    this.id = generateId();
  }
}
