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

test("Find ship", () => {
  battleship.placeShip("carrier", 1, 1, "xAxis");

  expect(battleship.findShip("carrier")).toEqual([
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
  ]);
});
