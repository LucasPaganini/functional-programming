import { Setoid } from '../types'

import { reverse } from './reverse'

type IsPalindrome = <A extends Setoid>(xs: Array<A>) => boolean
export const isPalindrome: IsPalindrome = xs => reverse(xs).every((x, i) => x.equals(xs[i]))
