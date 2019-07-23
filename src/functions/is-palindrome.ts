import { Setoid } from "../types";

import { reverse } from "./reverse";

type IsPalindrome = <T extends Setoid<T>>(xs: Array<T>) => boolean;
export const isPalindrome: IsPalindrome = xs =>
  reverse(xs).every((x, i) => x.equals(xs[i]));
