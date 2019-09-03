import { Setoid } from '../types'

// indexOf :: Setoid a => [a] -> a -> Int
type IndexOf = <A extends Setoid>(xs: Array<A>) => (x: A) => number | undefined
export const indexOf: IndexOf = xs => x => {
  const i = xs.findIndex(x.equals)
  return i === -1 ? undefined : i
}
