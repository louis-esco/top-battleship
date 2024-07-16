export class BoardCell {
  constructor() {
    this.ship = null;
    this.isHit = false;
  }

  hitCell() {
    this.isHit = true;
    return this;
  }
}
