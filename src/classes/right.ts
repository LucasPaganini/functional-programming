import { CovariantFunctor } from "../types";

export interface Right<T> extends CovariantFunctor<T> {
  x: T;
  map<B>(f: (x: T) => B): Right<B>;
}

interface RightT {
  <T>(x: T): Right<T>;
}

export const Right: RightT = <T>(x: T) => {
  return {
    x,
    map<B>(f: (x: T) => B): Right<B> {
      return Right(f(x));
    }
  };
};
