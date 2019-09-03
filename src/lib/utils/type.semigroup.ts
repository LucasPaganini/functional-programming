/**
 * # Laws
 * - **Associativity**: `a.concat(b).concat(c) === a.concat(b.concat(c))`
 */
export interface Semigroup {
  concat(x: this): this
}
