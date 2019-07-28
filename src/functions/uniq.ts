import { Setoid } from "../types";
import { indexOf } from "./index-of";

type Uniq = <T extends Setoid<T>>(xs: Array<T>) => Array<T>;
export const uniq: Uniq = xs => xs.filter((x, i) => indexOf(xs)(x) === i);
