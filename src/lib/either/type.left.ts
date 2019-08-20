export interface Left<E> {
  readonly _tag: 'Left'
  readonly value: E
}
