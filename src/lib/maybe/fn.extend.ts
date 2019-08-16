import { Maybe } from './type.maybe'
import { Some } from './type.some'
import { None } from './type.none'
import { isSome } from './fn.is-some'
import { some } from './fn.some'
import { none } from './const.none'

export function extend<A, B>(f: (m: Maybe<A>) => B): (m: Some<A>) => Some<B>
export function extend<A, B>(f: (m: Maybe<A>) => B): (m: None) => None
export function extend<A, B>(f: (m: Maybe<A>) => B): (m: Maybe<A>) => Maybe<B>
export function extend<A, B>(f: (m: Maybe<A>) => B): (m: Maybe<A>) => Maybe<B> {
  return m => (isSome(m) ? some(f(m)) : none)
}
