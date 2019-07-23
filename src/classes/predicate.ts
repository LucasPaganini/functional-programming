import { ContravariantFunctor, Monoid, MonoidFactory } from "../types";

export interface Predicate<A>
  extends ContravariantFunctor<A>,
    Monoid<Predicate<A>> {
  (v: A): boolean;
  contramap<B>(fn: (a: B) => A): Predicate<B>;
  concat(other: Predicate<A>): Predicate<A>;
}

interface PredicateFactory extends MonoidFactory<Predicate<any>> {
  <V = any>(fn: (v: V) => boolean): Predicate<V>;
  empty(): Predicate<any>;
}

export const Predicate: PredicateFactory = <A = any>(
  fn: (v: A) => boolean
): Predicate<A> =>
  Object.assign({}, fn, {
    contramap: <B>(f: (a: B) => A) => Predicate<B>(x => fn(f(x))),
    concat: (other: Predicate<A>): Predicate<A> =>
      Predicate(x => fn(x) && other(x))
  });

Predicate.empty = () => Predicate(() => true);
