import { Ord } from '../lib/utils'
import { clone } from './fn.clone'
import { gt } from './fn.gt'

type BubbleSort = <T extends Ord>(xs: Array<T>) => Array<T>
export const bubbleSort: BubbleSort = xs => {
  const _xs = clone(xs)
  let n = _xs.length - 1
  let swapped = true
  while (swapped) {
    swapped = false
    for (let i = 1; i <= n; i++) {
      const curr = _xs[i]
      const prev = _xs[i - 1]
      if (gt(prev)(curr)) {
        _xs[i - 1] = curr
        _xs[i] = prev
        swapped = true
      }
    }
  }
  return xs
}
