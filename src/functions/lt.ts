import { Ord } from '../types'

import { not } from './not'
import { gte } from './gte'

type Lt = <A extends Ord>(x: A) => (y: A) => boolean
export const lt: Lt = x => y => not(gte(x)(y))
