import { Semigroup } from "../types";

type Concat = <T extends Semigroup<T>>(x: T) => (y: T) => T;
export const concat: Concat = x => y => x.concat(y);
