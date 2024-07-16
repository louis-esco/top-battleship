import { BoardCell } from "../boardCell";

test("Create new boardCell", () => {
  expect(new BoardCell()).toEqual({ ship: null, isHit: false });
});

const testCell = new BoardCell();

test("Hit boardCell", () => {
  expect(testCell.hitCell()).toEqual({
    ship: null,
    isHit: true,
  });
});
