import { CovariantFunctor } from "../types";

export interface Some<T> extends CovariantFunctor<T> {
  x: T;
  map<B>(f: (x: T) => B): Some<B>;
}

interface SomeFactory {
  <T>(x: T): Some<T>;
}

export const Some: SomeFactory = <T>(x: T) => {
  return {
    x,
    map<B>(f: (x: T) => B): Some<B> {
      return Some(f(x));
    }
  };
};
