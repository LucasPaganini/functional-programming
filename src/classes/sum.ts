import { Monoid, MonoidT, Ord, Foldable } from '../lib/utils'

export interface Sum extends Monoid, Ord, Foldable<number> {
  x: number
}

interface SumT extends MonoidT<Sum> {
  (x: number): Sum
}

export const Sum: SumT = x => {
  return {
    x,
    concat(other) {
      return Sum(x + other.x)
    },
    equals(other) {
      return x === other.x
    },
    lte(other) {
      return x <= other.x
    },
    reduce: fn => seed => fn(seed)(x),
  }
}

Sum.empty = () => Sum(0)
