export interface Leaf<A> {
  readonly _tag: 'Leaf'
  readonly value: A
}
