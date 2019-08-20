import { Left } from './type.left'

export function left<A>(value: A): Left<A> {
  return { _tag: 'Left', value }
}
