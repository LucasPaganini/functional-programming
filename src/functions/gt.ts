import { Ord } from "../types";

import { not } from "./not";
import { lte } from "./lte";

type Gt = <T extends Ord<T>>(x: T) => (y: T) => boolean;
export const gt: Gt = x => y => not(lte(x)(y));
