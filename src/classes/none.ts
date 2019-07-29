import { CovariantFunctor, Alt, PlusT } from "../types";
import { Maybe } from "./maybe";

export interface None<T> extends CovariantFunctor<any>, Alt<T> {
  map(f: (x: any) => any): None<T>;
  alt(other: Maybe<T>): Maybe<T>;
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
    }
  };
};

None.zero = () => None();
