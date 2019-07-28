import { Apply } from "./apply";

export interface ApplicativeFactory {
  of<A>(a: A): Apply<A>;
}
