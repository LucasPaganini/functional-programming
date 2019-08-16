import { Maybe } from './type.maybe'
import { Some } from './type.some'
import { None } from './type.none'
import { extractOr } from './fn.extract-or'

export function extractOrUndefined<A>(m: Some<A>): A
export function extractOrUndefined(m: None): undefined
export function extractOrUndefined<A>(m: Maybe<A>): A | undefined
export function extractOrUndefined<A>(m: Maybe<A>): A | undefined {
  return extractOr(m)(undefined)
}
