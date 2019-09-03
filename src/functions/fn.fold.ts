import { Monoid, MonoidT, Foldable } from '../lib/utils'
import { abToBa } from '../lib/function'

type Fold = <A, B extends Monoid>(fn: (a: A) => B) => (T: MonoidT<B>) => (fa: Foldable<A>) => B
export const fold: Fold = fn => T => fa => abToBa(fa.reduce)(T.empty())(acc => curr => acc.concat(fn(curr)))
