import { Setoid } from "../types";

import { equals } from "./equals";

// indexOf :: Setoid a => [a] -> a -> Int
type IndexOf = <T extends Setoid<T>>(
  xs: Array<T>
) => (x: T) => number | undefined;
export const indexOf: IndexOf = xs => x => {
  const isEqual = equals(x);
  for (let i = 0; i < xs.length; i++) {
    if (isEqual(xs[i])) return i;
  }
  return undefined;
};
