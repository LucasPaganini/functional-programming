import { Apply } from './type.apply'

export interface ApplicativeT {
  of<A>(a: A): Apply<A>
}
