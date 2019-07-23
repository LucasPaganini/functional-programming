import { Ord } from "../types";
import { clone } from "./clone";
import { lt } from "./lt";

type Quicksort = <T extends Ord<T>>(xs: Array<T>) => Array<T>;
export const quicksort: Quicksort = xs =>
  _quickSort(clone(xs), 0, xs.length - 1);

const _quickSort = (xs: any, lo: any, hi: any) => {
  if (lo < hi) {
    const p = _partition(xs, lo, hi);
    _quickSort(xs, lo, p - 1);
    _quickSort(xs, p + 1, hi);
  }
  return xs;
};

const _partition = (xs: any, lo: any, hi: any) => {
  const pivot = xs[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (lt(xs[j])(pivot)) {
      if (i != j) {
        const xsi = xs[i];
        const xsj = xs[j];
        xs[i] = xsj;
        xs[j] = xsi;
      }
      i++;
    }
  }
  const xsi = xs[i];
  const xshi = xs[hi];
  xs[i] = xshi;
  xs[hi] = xsi;
  return i;
};
