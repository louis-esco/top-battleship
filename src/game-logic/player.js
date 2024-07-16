import { Gameboard } from "./gameboard";

export class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.gameboard = new Gameboard(10);
  }
}
