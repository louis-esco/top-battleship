import { BoardCell } from "./boardCell";
import { Ship } from "./ship";

export class Gameboard {
  constructor(size) {
    this.board = this.createBoard((size = 10));
    this.ships = this.createShips();
  }

  createBoard(size) {
    let board = new Array(10);
    for (let i = 0; i < size; i++) {
      board[i] = new Array(10);
      for (let j = 0; j < size; j++) {
        board[i][j] = new BoardCell();
      }
    }
    return board;
  }

  createShips() {
    return {
      carrier: new Ship(5, "carrier"),
      battleship: new Ship(4, "battleship"),
      cruiser: new Ship(3, "cruiser"),
      submarine: new Ship(3, "submarine"),
      destroyer: new Ship(2, "destroyer"),
    };
  }

  placeShip(shipName, x, y, axis) {
    if (this.checkValidPlacement(shipName, x, y, axis)) {
      this.changeCellsShip(shipName, x, y, axis);
      return true;
    }
    return false;
  }

  receiveAttack(x, y) {
    if (this.board[y][x].isHit) return false;
    return this.board[y][x].hitCell();
  }

  checkAllShipsSunk() {
    for (let ship in this.ships) {
      if (!this.ships[ship].isSunk()) return false;
    }
    return true;
  }

  removeAllShips() {
    for (let i = 0; i < this.board.length; i++)
      for (let j = 0; j < this.board.length; j++) this.board[i][j].ship = null;
  }

  placeShipsRandom() {
    this.removeAllShips();
    for (let ship in this.ships) {
      let placed = false;
      while (!placed) {
        let x = Math.floor(Math.random() * (this.board.length - 2));
        let y = Math.floor(Math.random() * (this.board.length - 2));
        let axis = Math.random() < 0.5 ? "xAxis" : "yAxis";
        placed = this.placeShip(ship, x, y, axis);
      }
    }
  }

  checkValidPlacement(shipName, x, y, axis) {
    return (
      this.ships[shipName] &&
      this.checkPositionValidity(shipName, x, y, axis) &&
      this.checkCellsAvailability(shipName, x, y, axis)
    );
  }

  checkPositionValidity(shipName, x, y, axis) {
    if (
      axis === "xAxis" &&
      x + this.ships[shipName].length <= this.board.length &&
      y < this.board.length
    )
      return true;
    if (
      axis === "yAxis" &&
      y + this.ships[shipName].length <= this.board.length &&
      x < this.board.length
    )
      return true;
    return false;
  }

  checkCellsAvailability(shipName, x, y, axis) {
    if (axis === "xAxis") {
      for (let i = x; i < this.ships[shipName].length + x; i++) {
        if (this.board[y][i].ship !== null) return false;
      }
      return true;
    }
    if (axis === "yAxis") {
      for (let i = y; i < this.ships[shipName].length + y; i++) {
        if (this.board[i][x].ship !== null) return false;
      }
      return true;
    }
    return false;
  }

  changeCellsShip(shipName, x, y, axis) {
    if (axis === "xAxis") {
      for (let i = x; i < this.ships[shipName].length + x; i++) {
        this.board[y][i].ship = this.ships[shipName];
      }
    } else if (axis === "yAxis") {
      for (let i = y; i < this.ships[shipName].length + y; i++) {
        this.board[i][x].ship = this.ships[shipName];
      }
    }
  }
}
