import { Semigroup, Setoid } from '../lib/utils'
import { uniq, indexOf, isUndefined } from '../functions'

export interface Set<A extends Setoid> extends Semigroup {
  toArray(): Array<A>
  has(a: A): boolean
  add(a: A): Set<A>
  delete(a: A): Set<A>
  intersection(other: Set<A>): Set<A>

  map<B extends Setoid>(fn: (a: A) => B): Set<B>
}

interface SetT {}

export const Set = <A extends Setoid>(values: Array<A>): Set<A> => {
  const _values = uniq(values)

  return {
    toArray() {
      return _values
    },
    add(a) {
      return Set([..._values, a])
    },
    has(a) {
      return _values.some(x => x.equals(a))
    },
    delete(a) {
      const i = indexOf(_values)(a)
      if (isUndefined(i)) return Set(_values)

      _values.splice(i, 1)
      return Set(_values)
    },
    map(fn) {
      return Set(_values.map(fn))
    },
    concat(other) {
      return Set([...other.toArray(), ..._values])
    },
    intersection(other) {
      return Set(_values.filter(other.has))
    },
  }
}
