import { Ord } from "../types";

import { gt } from "./gt";
import { equals } from "./equals";

type Gte = <T extends Ord<T>>(x: T) => (y: T) => boolean;
export const gte: Gte = x => y => gt(x)(y) || equals(x)(y);
