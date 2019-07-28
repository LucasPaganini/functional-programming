export interface Apply<A> {
  ap<B>(other: Apply<(a: A) => B>): Apply<B>;
}
