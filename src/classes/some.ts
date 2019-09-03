import { CovariantFunctor, Alt, PlusT, Foldable } from '../types'
import { Maybe } from './maybe'
import { None } from './none'

export interface Some<A> extends CovariantFunctor<A>, Alt, Foldable<A> {
  x: A
  map<B>(f: (x: A) => B): Some<B>
  // alt(other: Maybe<A>): Some<A>;
}

interface SomeT extends PlusT {
  <T>(x: T): Some<T>
  zero(): None<any>
}

export const Some: SomeT = <A>(x: A) => {
  return {
    x,
    map<B>(f: (x: A) => B): Some<B> {
      return Some(f(x))
    },
    alt(): Some<A> {
      return Some(x)
    },
    reduce: <B>(fn: (acc: B) => (curr: A) => B) => (seed: B): B => {
      return fn(seed)(x)
    },
  }
}

Some.zero = () => None()
