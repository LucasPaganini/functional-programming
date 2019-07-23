import { Ord, Factory } from "../types";
import { lt } from "../functions";
import { Coord } from "./coord";

export interface Line extends Ord<Line> {
  from: Coord;
  to: Coord;
}

interface LineFactory extends Factory<[Coord, Coord], Line> {}

export const Line: LineFactory = ([from, to]) => {
  return {
    to,
    from,

    equals(other) {
      return this.from.equals(other.from) && this.to.equals(other.to);
    },

    lte(other) {
      return (
        lt(this.from)(other.from) ||
        (this.from.equals(other.from) && lt(this.to)(other.to)) ||
        this.equals(other)
      );
    }
  };
};
