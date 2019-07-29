import { CovariantFunctor } from "../types";

export interface Left<E> extends CovariantFunctor<any> {
  x: E;
  map(f: (x: any) => any): Left<E>;
}

interface LeftT {
  <E>(x: E): Left<E>;
}

export const Left: LeftT = <E>(x: E) => {
  return {
    x,
    map(f: (x: any) => any): Left<E> {
      return Left(x);
    }
  };
};
