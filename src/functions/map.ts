import { CovariantFunctor } from "../types";

type Map = <A, B>(
  f: (a: A) => B
) => <C extends CovariantFunctor<B>>(o: { map(f: (a: A) => B): C }) => C;
export const map: Map = f => o => o.map(f);
