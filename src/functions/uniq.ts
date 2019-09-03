import { Setoid } from '../types'
import { indexOf } from './index-of'

type Uniq = <A extends Setoid>(xs: Array<A>) => Array<A>
export const uniq: Uniq = xs => xs.filter((x, i) => indexOf(xs)(x) === i)
