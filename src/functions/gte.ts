import { Ord } from '../types'
import { gt } from './gt'

type Gte = <A extends Ord>(x: A) => (y: A) => boolean
export const gte: Gte = x => y => gt(x)(y) || x.equals(y)
