import { Ord, Factory } from '../lib/utils'
import { lt } from '../lib/utils/functions'
import { Coord } from './coord'

export interface Line extends Ord {
  from: Coord
  to: Coord
}

interface LineT extends Factory<[Coord, Coord], Line> {}

export const Line: LineT = ([from, to]) => {
  return {
    to,
    from,

    equals(other) {
      return this.from.equals(other.from) && this.to.equals(other.to)
    },

    lte(other) {
      return lt(this.from)(other.from) || (this.from.equals(other.from) && lt(this.to)(other.to)) || this.equals(other)
    },
  }
}
