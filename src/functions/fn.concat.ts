import { Semigroup } from '../lib/utils'

type Concat = <A extends Semigroup>(x: A) => (y: A) => A
export const concat: Concat = x => y => x.concat(y)
