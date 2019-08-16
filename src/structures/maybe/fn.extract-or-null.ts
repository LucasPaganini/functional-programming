import { Maybe } from './type.maybe'
import { Some } from './type.some'
import { None } from './type.none'
import { extractOr } from './fn.extract-or'

export function extractOrNull<A>(m: Some<A>): A
export function extractOrNull(m: None): null
export function extractOrNull<A>(m: Maybe<A>): A | null
export function extractOrNull<A>(m: Maybe<A>): A | null {
  return extractOr(m)(null)
}
