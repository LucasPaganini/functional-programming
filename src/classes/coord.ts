import { Ord, Factory } from '../lib/utils'

export interface Coord extends Ord {
  x: number
  y: number
  z: number
}

interface CoordT extends Factory<[number, number, number], Coord> {}

export const Coord: CoordT = ([x, y, z]: [number, number, number]): Coord => {
  return {
    x,
    y,
    z,

    equals(other) {
      return this.x == other.x && this.y == other.y && this.z == other.z
    },

    lte(other) {
      return (
        this.x < other.x ||
        (this.x == other.x && this.y < other.y) ||
        (this.x == other.x && this.y == other.y && this.z < other.z) ||
        this.equals(other)
      )
    },
  }
}
