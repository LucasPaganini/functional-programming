import { CovariantFunctor, Alt, PlusT } from "../types";
import { Maybe } from "./maybe";
import { None } from "./none";

export interface Some<T> extends CovariantFunctor<T>, Alt<T> {
  x: T;
  map<B>(f: (x: T) => B): Some<B>;
  alt(other: Maybe<T>): Some<T>;
}

interface SomeT extends PlusT {
  <T>(x: T): Some<T>;
  zero(): None<any>;
}

export const Some: SomeT = <T>(x: T) => {
  return {
    x,
    map<B>(f: (x: T) => B): Some<B> {
      return Some(f(x));
    },
    alt(): Some<T> {
      return Some(x);
    }
  };
};

Some.zero = () => None();
