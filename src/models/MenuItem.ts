import { generateId } from "../utils/util";

export default class MenuItem {
  public readonly id: number;
  public readonly name: string;
  public readonly price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.id = generateId();
  }
}
