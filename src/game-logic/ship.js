export class Ship {
  constructor(length, name) {
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    if (this.sunk) return this;
    this.hits++;
    this.isSunk();
    return this;
  }

  isSunk() {
    if (this.hits >= this.length) this.sunk = true;
  }
}
