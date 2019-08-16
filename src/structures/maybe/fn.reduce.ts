import { Maybe } from './type.maybe'
import { isSome } from './fn.is-some'

export function reduce<A>(m: Maybe<A>): <B>(f: (acc: B) => (curr: A) => B) => (seed: B) => B
export function reduce<A>(m: Maybe<A>): <B>(f: (acc: B) => (curr: A) => B) => (seed: B) => B {
  return f => seed => (isSome(m) ? f(seed)(m.value) : seed)
}
