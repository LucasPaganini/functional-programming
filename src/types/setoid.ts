export interface Setoid<T> {
  equals(other: T): boolean;
}
