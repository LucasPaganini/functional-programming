import { isSome } from './fn.is-some'
import { Maybe } from './type.maybe'
import { Some } from './type.some'

export function alt<A>(m1: Some<A>): (m2: Maybe<A>) => Some<A>
export function alt<A>(m1: Maybe<A>): (m2: Some<A>) => Some<A>
export function alt<A>(m1: Maybe<A>): (m2: Maybe<A>) => Maybe<A>
export function alt<A>(m1: Maybe<A>): (m2: Maybe<A>) => Maybe<A> {
  return m2 => (isSome(m1) ? m1 : m2)
}
