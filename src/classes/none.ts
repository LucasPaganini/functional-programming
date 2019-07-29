import { CovariantFunctor, Alt, PlusT, Foldable } from "../types";
import { Maybe } from "./maybe";

export interface None<A> extends CovariantFunctor<any>, Alt<A>, Foldable<A> {
  map(f: (x: any) => any): None<A>;
  alt(other: Maybe<A>): Maybe<A>;
}

interface NoneT extends PlusT {
  (): None<any>;
  zero(): None<any>;
}

export const None: NoneT = () => {
  return {
    map(): None<any> {
      return None();
    },
    alt<T>(other: Maybe<T>): Maybe<T> {
      return other;
    },
    reduce: <B>(fn: (acc: B) => (curr: any) => B) => (seed: B): B => {
      return seed;
    }
  };
};

None.zero = () => None();
