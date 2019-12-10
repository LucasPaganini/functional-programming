import { Ord } from '..'
import { gt } from './fn.gt'

type Gte = <A extends Ord>(x: A) => (y: A) => boolean
export const gte: Gte = x => y => gt(x)(y) || x.equals(y)
