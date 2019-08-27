import { Tuple1, Tuple2, Tuple3, Tuple4 } from './type.tuple'
import { tuple as tupleFn } from './fn.tuple'

type AnyTuple = Tuple4<any, any, any, any> | Tuple3<any, any, any> | Tuple2<any, any> | Tuple1<any>

export function remove(index: 0): <A, B, C, D>(tuple: Tuple4<A, B, C, D>) => Tuple3<B, C, D>
export function remove(index: 1): <A, B, C, D>(tuple: Tuple4<A, B, C, D>) => Tuple3<A, C, D>
export function remove(index: 2): <A, B, C, D>(tuple: Tuple4<A, B, C, D>) => Tuple3<A, B, D>
export function remove(index: 3): <A, B, C, D>(tuple: Tuple4<A, B, C, D>) => Tuple3<A, B, C>
export function remove(index: 0): <A, B, C>(tuple: Tuple3<A, B, C>) => Tuple2<B, C>
export function remove(index: 1): <A, B, C>(tuple: Tuple3<A, B, C>) => Tuple2<A, C>
export function remove(index: 2): <A, B, C>(tuple: Tuple3<A, B, C>) => Tuple2<A, B>
export function remove(index: 0): <A, B>(tuple: Tuple2<A, B>) => Tuple1<B>
export function remove(index: 1): <A, B>(tuple: Tuple2<A, B>) => Tuple1<A>
export function remove(index: number) {
  return (tuple: AnyTuple): AnyTuple => tupleFn(tuple.values.filter((_, i) => i !== index))
}
