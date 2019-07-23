/**
 * # Laws
 * - **Identity**: `a.contramap(x => x) === a`
 * - **Composition**: `a.contramap(f).contramap(g) === a.contramap(x => f(g(x)))`
 */
export interface ContravariantFunctor<A> {
  contramap<B>(fn: (b: B) => A): ContravariantFunctor<B>;
}
