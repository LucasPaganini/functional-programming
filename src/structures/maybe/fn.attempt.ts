import { Maybe } from './type.maybe'
import { some } from './fn.some'
import { none } from './const.none'

export function attempt<A>(f: () => A): () => Maybe<A> {
  return () => {
    try {
      return some(f())
    } catch {
      return none
    }
  }
}
