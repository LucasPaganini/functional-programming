import { Ord } from "../types";

import { not } from "./not";
import { gte } from "./gte";

type Lt = <T extends Ord<T>>(x: T) => (y: T) => boolean;
export const lt: Lt = x => y => not(gte(x)(y));
