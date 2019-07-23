import { fold } from "./fold";
import { Sum } from "../classes";
import { equals } from "./equals";

describe("fold", () => {
  it("Should work with Sum and some arguments", () => {
    const expected = Sum(15);
    const actual = fold(Sum)([1, 2, 3, 4, 5]);
    expect(equals(actual)(expected)).toBe(true);
  });

  it("Should work with Sum and zero arguments", () => {
    const expected = Sum(0);
    const actual = fold(Sum)([]);
    expect(equals(actual)(expected)).toBe(true);
  });
});
