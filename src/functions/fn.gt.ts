import { Ord } from '../lib/utils'

import { not } from './fn.not'
import { lte } from './fn.lte'

type Gt = <A extends Ord>(x: A) => (y: A) => boolean
export const gt: Gt = x => y => not(lte(x)(y))
