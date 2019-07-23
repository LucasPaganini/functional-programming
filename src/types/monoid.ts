import { Semigroup } from "./semigroup";

export interface MonoidFactory<M> {
  empty(): M;
}

export interface Monoid<M> extends Semigroup<M> {
  concat(other: M): M;
}
