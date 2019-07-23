import { Ord } from "../types";
import { clone } from "./clone";
import { lte } from "./lte";

type MergeSort = <T extends Ord<T>>(xs: Array<T>) => Array<T>;
export const mergeSort: MergeSort = xs => {
  if (xs.length <= 1) return xs;

  const left = [] as any[];
  const right = [] as any[];
  xs.forEach((x, i) => {
    if (i < xs.length / 2) {
      left.push(x);
    } else {
      right.push(x);
    }
  });

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return _merge(leftSorted, rightSorted);
};

const _merge = (left: any[], right: any[]) => {
  const result = [];
  let l = clone(left);
  let r = clone(right);

  while (l.length > 0 && r.length > 0) {
    const [lhead, ...ltail] = l;
    const [rhead, ...rtail] = r;

    if (lte(lhead)(rhead)) {
      result.push(lhead);
      l = ltail;
    } else {
      result.push(rhead);
      r = rtail;
    }
  }

  // Either left or right may have elements left; consume them
  // (Only one of the following loops will actually be entered)
  if (l.length > 0) {
    result.push(...l);
  }
  if (r.length > 0) {
    result.push(...r);
  }

  return result;
};
