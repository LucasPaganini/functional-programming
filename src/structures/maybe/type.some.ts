export interface Some<A> {
  readonly _tag: 'Some'
  readonly value: A
}
