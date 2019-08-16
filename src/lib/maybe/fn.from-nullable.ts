import { Maybe } from './type.maybe'
import { none } from './const.none'
import { some } from './fn.some'

export function fromNullable<A>(value: null | undefined | A): Maybe<A> {
  return value === null || value === undefined ? none : some(value)
}
