/**
 * # Laws
 * - **Associativity**: `a.concat(b).concat(c) === a.concat(b.concat(c))`
 */
export interface Semigroup<T> {
  concat(x: T): T;
}
