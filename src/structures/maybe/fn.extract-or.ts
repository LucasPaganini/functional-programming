import { Maybe } from './type.maybe'
import { Some } from './type.some'
import { None } from './type.none'
import { isSome } from './fn.is-some'

export function extractOr<A>(m: Some<A>): (def: any) => A
export function extractOr(m: None): <B>(def: B) => B
export function extractOr<A>(m: Maybe<A>): <B>(def: B) => A | B
export function extractOr<A>(m: Maybe<A>): <B>(def: B) => A | B {
  return def => (isSome(m) ? m.value : def)
}
