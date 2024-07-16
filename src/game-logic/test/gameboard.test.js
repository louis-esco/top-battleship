import { Gameboard } from "../gameboard";
import { BoardCell } from "../boardCell";
import { Ship } from "../ship";

test("Create new board", () => {
  expect(new Gameboard(10).board).toHaveLength(10);
  expect(new Gameboard(10).board[1]).toHaveLength(10);
  expect(new Gameboard(10).board[1][1]).toEqual(new BoardCell());
});

test("Create ships", () => {
  expect(new Gameboard(10).ships).toEqual({
    carrier: new Ship(5, "carrier"),
    battleship: new Ship(4, "battleship"),
    cruiser: new Ship(3, "cruiser"),
    submarine: new Ship(3, "submarine"),
    destroyer: new Ship(2, "destroyer"),
  });
});

const battleship = new Gameboard();

test("Place ship", () => {
  expect(battleship.placeShip("carrier", 1, 1, "xAxis")).toBe(true);
  expect(battleship.placeShip("carrier", 8, 1, "xAxis")).toBe(false);
});

test("Hit cell", () => {
  battleship.placeShip("carrier", 1, 1, "xAxis");
  battleship.placeShip("battleship", 1, 2, "xAxis");
  battleship.placeShip("cruiser", 1, 3, "xAxis");
  battleship.placeShip("submarine", 1, 4, "xAxis");
  battleship.placeShip("destroyer", 1, 5, "yAxis");

  expect(battleship.receiveAttack(1, 1)).toEqual({
    ship: {
      hits: 1,
      length: 5,
      name: "carrier",
      sunk: false,
    },
    isHit: true,
  });

  battleship.receiveAttack(1, 1);
  expect(battleship.receiveAttack(1, 1)).toBe(false);
});

test("Check if all ships sunk", () => {
  expect(battleship.checkAllShipsSunk()).toBe(false);

  battleship.placeShip("carrier", 1, 1, "xAxis");
  battleship.receiveAttack(1, 1);
  battleship.receiveAttack(2, 1);
  battleship.receiveAttack(3, 1);
  battleship.receiveAttack(4, 1);
  battleship.receiveAttack(5, 1);

  battleship.placeShip("battleship", 1, 2, "xAxis");
  battleship.receiveAttack(1, 2);
  battleship.receiveAttack(2, 2);
  battleship.receiveAttack(3, 2);
  battleship.receiveAttack(4, 2);

  battleship.placeShip("cruiser", 1, 3, "xAxis");
  battleship.receiveAttack(1, 3);
  battleship.receiveAttack(2, 3);
  battleship.receiveAttack(3, 3);

  battleship.placeShip("submarine", 1, 4, "xAxis");
  battleship.receiveAttack(1, 4);
  battleship.receiveAttack(2, 4);
  battleship.receiveAttack(3, 4);

  battleship.placeShip("destroyer", 1, 5, "yAxis");
  battleship.receiveAttack(1, 5);

  expect(battleship.checkAllShipsSunk()).toBe(false);

  battleship.receiveAttack(1, 6);

  expect(battleship.checkAllShipsSunk()).toBe(true);
});
