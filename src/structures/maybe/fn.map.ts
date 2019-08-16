import { Maybe } from './type.maybe'
import { some } from './fn.some'
import { isSome } from './fn.is-some'
import { none } from './const.none'
import { Some } from './type.some'
import { None } from './type.none'

export function map<A>(m: Some<A>): <B>(f: (a: A) => B) => Some<B>
export function map(m: None): <A, B>(f: (a: A) => B) => None
export function map<A>(m: Maybe<A>): <B>(f: (a: A) => B) => Maybe<B>
export function map<A>(m: Maybe<A>): <B>(f: (a: A) => B) => Maybe<B> {
  return f => (isSome(m) ? some(f(m.value)) : none)
}
