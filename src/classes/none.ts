import { CovariantFunctor } from "../types";

export interface None extends CovariantFunctor<any> {
  map(f: (x: any) => any): None;
}

interface NoneFactory {
  (): None;
}

export const None: NoneFactory = () => {
  return {
    map(f: (x: any) => any): None {
      return None();
    }
  };
};
