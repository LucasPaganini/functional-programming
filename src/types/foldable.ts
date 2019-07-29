export interface Foldable<A> {
  reduce<B>(fn: (acc: B) => (curr: A) => B): (seed: B) => B;
}
