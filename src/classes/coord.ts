import { Ord, Factory } from "../types";

export interface Coord extends Ord<Coord> {
  x: number;
  y: number;
  z: number;
}

interface CoordT extends Factory<[number, number, number], Coord> {}

export const Coord: CoordT = ([x, y, z]) => {
  return {
    x,
    y,
    z,

    equals(other) {
      return this.x == other.x && this.y == other.y && this.z == other.z;
    },

    lte(other) {
      return (
        this.x < other.x ||
        (this.x == other.x && this.y < other.y) ||
        (this.x == other.x && this.y == other.y && this.z < other.z) ||
        this.equals(other)
      );
    }
  };
};
