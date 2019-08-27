export interface Tuple1<A> {
  readonly _tag: 'Tuple1'
  readonly values: [A]
}

export interface Tuple2<A, B> {
  readonly _tag: 'Tuple2'
  readonly values: [A, B]
}

export interface Tuple3<A, B, C> {
  readonly _tag: 'Tuple3'
  readonly values: [A, B, C]
}

export interface Tuple4<A, B, C, D> {
  readonly _tag: 'Tuple4'
  readonly values: [A, B, C, D]
}
