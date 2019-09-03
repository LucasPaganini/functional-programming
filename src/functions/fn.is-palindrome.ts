import { Setoid } from '../lib/utils'

import { reverse } from './fn.reverse'

type IsPalindrome = <A extends Setoid>(xs: Array<A>) => boolean
export const isPalindrome: IsPalindrome = xs => reverse(xs).every((x, i) => x.equals(xs[i]))
