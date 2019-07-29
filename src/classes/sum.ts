import { Monoid, MonoidT, Ord, Foldable } from "../types";

export interface Sum extends Monoid<Sum>, Ord<Sum>, Foldable<number> {
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
    },
    reduce: fn => seed => fn(seed)(x)
  };
};

Sum.empty = () => Sum(0);
