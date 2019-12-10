import { Setoid } from '..'
import { indexOf } from './fn.index-of'

type Uniq = <A extends Setoid>(xs: Array<A>) => Array<A>
export const uniq: Uniq = xs => xs.filter((x, i) => indexOf(xs)(x) === i)
