import { Gameboard } from "../gameboard";
import { Player } from "../player";

test("Create new player", () => {
  expect(new Player("Louis", "real")).toEqual({
    name: "Louis",
    type: "real",
    gameboard: new Gameboard(10),
  });
});
