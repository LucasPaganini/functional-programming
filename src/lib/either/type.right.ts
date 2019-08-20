export interface Right<A> {
  readonly _tag: 'Right'
  readonly value: A
}
