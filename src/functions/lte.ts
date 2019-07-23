import { Ord } from "../types";

type Lte = <T extends Ord<T>>(x: T) => (y: T) => boolean;
export const lte: Lte = x => y => x.lte(y);
