import { Gameboard } from "../gameboard";
import { Player } from "../player";

test("Create new player", () => {
  expect(new Player("real")).toEqual({
    type: "real",
    gameboard: new Gameboard(10),
  });
});
