export class BoardCell {
  constructor() {
    this.ship = null;
    this.isHit = false;
  }

  hitCell() {
    this.isHit = true;
    if (this.ship !== null) this.ship.hit();
    return this;
  }

  hasShip() {
    if (this.ship === null) return false;
    else return true;
  }
}
