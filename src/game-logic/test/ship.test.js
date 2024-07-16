import { Ship } from "../ship";

describe("Validator", () => {
  test("Create new ship", () => {
    expect(new Ship(3)).toEqual({ length: 3, hits: 0, sunk: false });
  });

  const carrier = new Ship(5);

  test("Hit a ship", () => {
    expect(carrier.hit()).toEqual({ length: 5, hits: 1, sunk: false });
  });

  test("Sink a ship", () => {
    expect(carrier.hit().hit().hit().hit()).toEqual({
      length: 5,
      hits: 5,
      sunk: true,
    });
  });

  test("Can't hit sunk ship", () => {
    expect(carrier.hit()).toEqual({
      length: 5,
      hits: 5,
      sunk: true,
    });
  });
});