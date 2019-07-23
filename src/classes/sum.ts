import { Monoid, MonoidFactory, Ord } from "../types";

export interface Sum extends Monoid<Sum>, Ord<Sum> {
  x: number;
}

interface SumFactory extends MonoidFactory<Sum> {
  (x: number): Sum;
  empty(): Sum;
}

export const Sum: SumFactory = x => {
  return {
    x,

    concat(other) {
      return Sum(x + other.x);
    },

    equals(other) {
      return x === other.x;
    },

    lte(other) {
      return x <= other.x;
    }
  };
};

Sum.empty = () => Sum(0);
