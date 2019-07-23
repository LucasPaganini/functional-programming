import { ContravariantFunctor } from "../types";

export interface Equivalence<A> extends ContravariantFunctor<A> {
  (x: A): (y: A) => boolean;
  contramap<B>(fn: (a: B) => A): Equivalence<B>;
}

interface EquivalenceFactory {
  <A>(fn: (x: A) => (y: A) => boolean): Equivalence<A>;
}

export const Equivalence: EquivalenceFactory = <A>(
  f: (x: A) => (y: A) => boolean
): Equivalence<A> =>
  Object.assign({}, f, {
    contramap: <B>(g: (a: B) => A): Equivalence<B> =>
      Equivalence(x => y => f(g(x))(g(y)))
  });
