import { Ord } from "../types";
import { clone } from "./clone";
import { gt } from "./gt";

type BubbleSort = <T extends Ord<T>>(xs: Array<T>) => Array<T>;
export const bubbleSort: BubbleSort = xs => {
  const _xs = clone(xs);
  let n = _xs.length - 1;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 1; i <= n; i++) {
      const curr = _xs[i];
      const prev = _xs[i - 1];
      if (gt(prev)(curr)) {
        _xs[i - 1] = curr;
        _xs[i] = prev;
        swapped = true;
      }
    }
  }
  return xs;
};
