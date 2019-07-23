import { Setoid } from "../types";

import { not } from "./not";
import { equals } from "./equals";

type NotEquals = <T extends Setoid<T>>(x: T) => (y: T) => boolean;
export const notEquals: NotEquals = x => y => not(equals(x)(y));
