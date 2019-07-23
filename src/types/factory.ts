export interface Factory<R, T> {
  (x: R): T;
}
