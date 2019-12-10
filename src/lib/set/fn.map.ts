import { Set } from './type.set'
import { set } from './fn.set'
import { Setoid } from '../utils'

export const map = <A extends Setoid, B extends Setoid>(f: (a: A) => B) => (s: Set<A>): Set<B> => set(s.values.map(f))
