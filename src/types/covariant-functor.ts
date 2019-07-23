export interface CovariantFunctor<A> {
  map<B>(fn: (a: A) => B): CovariantFunctor<B>;
}
