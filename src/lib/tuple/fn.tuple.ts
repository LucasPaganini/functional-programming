import { Tuple1, Tuple2, Tuple3, Tuple4 } from './type.tuple'

export function tuple<A, B, C, D>(...values: [A, B, C, D]): Tuple4<A, B, C, D>
export function tuple<A, B, C>(...values: [A, B, C]): Tuple3<A, B, C>
export function tuple<A, B>(...values: [A, B]): Tuple2<A, B>
export function tuple<A>(...values: [A]): Tuple1<A>
export function tuple(...values: any[]) {
  return { _tag: 'Tuple' + values.length, values }
}
