import { Ord } from '../types'

import { not } from './not'
import { lte } from './lte'

type Gt = <A extends Ord>(x: A) => (y: A) => boolean
export const gt: Gt = x => y => not(lte(x)(y))
