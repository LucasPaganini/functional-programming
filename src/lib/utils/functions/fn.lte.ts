import { Ord } from '..'

type Lte = <A extends Ord>(x: A) => (y: A) => boolean
export const lte: Lte = x => y => x.lte(y)
