import { Maybe } from './type.maybe'
import { None } from './type.none'
import { isSome } from './fn.is-some'
import { none } from './const.none'

export function chain<A, B>(f: (a: A) => Maybe<B>): (m: None) => None
export function chain<A, B>(f: (a: A) => Maybe<B>): (m: Maybe<A>) => Maybe<B>
export function chain<A, B>(f: (a: A) => Maybe<B>): (m: Maybe<A>) => Maybe<B> {
  return m => (isSome(m) ? f(m.value) : none)
}
