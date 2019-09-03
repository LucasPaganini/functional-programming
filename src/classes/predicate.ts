import { ContravariantFunctor, Monoid, MonoidT } from '../lib/utils'

export interface Predicate<A> extends ContravariantFunctor<A>, Monoid {
  (v: A): boolean
  contramap<B>(fn: (a: B) => A): Predicate<B>
}

interface PredicateT extends MonoidT<Predicate<any>> {
  <V = any>(fn: (v: V) => boolean): Predicate<V>
  empty(): Predicate<any>
}

export const Predicate: PredicateT = <A = any>(fn: (v: A) => boolean): Predicate<A> =>
  Object.assign((v: A) => fn(v), {
    contramap: <B>(f: (a: B) => A) => Predicate<B>(x => fn(f(x))),
    concat: (other: Predicate<A>): Predicate<A> => Predicate(x => fn(x) && other(x)),
  })

Predicate.empty = () => Predicate(() => true)
