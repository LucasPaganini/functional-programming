import { isSome } from './fn.is-some'
import { Maybe } from './type.maybe'
import { none } from './const.none'
import { None } from './type.none'
import { some } from './fn.some'

export function filter(m: None): (f: (value: any) => Boolean) => None
export function filter<A>(m: Maybe<A>): <B extends A>(f: (value: A) => value is B) => Maybe<B>
export function filter<A>(m: Maybe<A>): (f: (value: A) => Boolean) => Maybe<A>
export function filter<A>(m: Maybe<A>): (f: (value: A) => Boolean) => Maybe<A> {
  return f => (isSome(m) && f(m.value) ? some(m.value) : none)
}
