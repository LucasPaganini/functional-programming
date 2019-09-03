import { ContravariantFunctor } from '../lib/utils'

export interface Equivalence<A> extends ContravariantFunctor<A> {
  (x: A): (y: A) => boolean
  contramap<B>(fn: (a: B) => A): Equivalence<B>
}

interface EquivalenceT {
  <A>(fn: (x: A) => (y: A) => boolean): Equivalence<A>
}

export const Equivalence: EquivalenceT = <A>(f: (x: A) => (y: A) => boolean): Equivalence<A> =>
  Object.assign({}, f, {
    contramap: <B>(g: (a: B) => A): Equivalence<B> => Equivalence(x => y => f(g(x))(g(y))),
  })
