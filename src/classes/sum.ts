import { Monoid, MonoidT, Ord } from "../types";

export interface Sum extends Monoid<Sum>, Ord<Sum> {
  x: number;
}

interface SumT extends MonoidT<Sum> {
  (x: number): Sum;
  empty(): Sum;
}

export const Sum: SumT = x => {
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
