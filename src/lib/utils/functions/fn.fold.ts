import { Monoid, MonoidT, Foldable } from '..'
import { flip } from '../../function'

type Fold = <A, B extends Monoid>(fn: (a: A) => B) => (T: MonoidT<B>) => (fa: Foldable<A>) => B
export const fold: Fold = fn => T => fa => flip(fa.reduce)(T.empty())(acc => curr => acc.concat(fn(curr)))
