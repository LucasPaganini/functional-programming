import { Setoid } from "./setoid";

/**
 * # Laws
 * Given any two values of an Ord type:
 * - **Totality**: `a.lte(b) || b.lte(a) === true`
 * - **Antisymmetry**: `a.lte(b) && b.lte(a) === a.equals(b)`
 * - **Transitivity**: `a.lte(b) && b.lte(c) === a.lte(c)`
 */
export interface Ord<T> extends Setoid<T> {
  lte(other: T): boolean;
}
