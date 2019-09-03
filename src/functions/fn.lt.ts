import { Ord } from '../lib/utils'

import { not } from './fn.not'
import { gte } from './fn.gte'

type Lt = <A extends Ord>(x: A) => (y: A) => boolean
export const lt: Lt = x => y => not(gte(x)(y))
