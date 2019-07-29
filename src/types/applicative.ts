import { Apply } from "./apply";

export interface ApplicativeT {
  of<A>(a: A): Apply<A>;
}
