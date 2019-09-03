import { Semigroup } from './type.semigroup'

export interface MonoidT<A extends Monoid = Monoid> {
  empty(): A
}

export interface Monoid extends Semigroup {
  concat(other: this): this
}
