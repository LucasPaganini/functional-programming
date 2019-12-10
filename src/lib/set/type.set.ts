export interface Set<A> {
  readonly _tag: 'Set'
  readonly values: Array<A>
}
