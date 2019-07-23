import { Setoid } from "../types";

type Equals = <T extends Setoid<T>>(x: T) => (y: T) => boolean;
export const equals: Equals = x => y => x.equals(y);
