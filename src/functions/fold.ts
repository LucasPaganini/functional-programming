import { Monoid, MonoidT, Foldable } from "../types";

type Fold = <A, B extends Monoid<B>>(
  fn: (a: A) => B
) => (T: MonoidT<B>) => (fa: Foldable<A>) => B;
export const fold: Fold = <A, B extends Monoid<B>>(fn: (a: A) => B) => (
  T: MonoidT<B>
) => (fa: Foldable<A>): B =>
  fa.reduce<B>(acc => curr => acc.concat(fn(curr)))(T.empty());
