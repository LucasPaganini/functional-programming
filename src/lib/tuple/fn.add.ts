import { Tuple1, Tuple2, Tuple3, Tuple4 } from './type.tuple'
import { tuple as tupleFn } from './fn.tuple'

type AnyTuple = Tuple4<any, any, any, any> | Tuple3<any, any, any> | Tuple2<any, any> | Tuple1<any>

export function add<A, B, C, D>(value: D): (tuple: Tuple3<A, B, C>) => Tuple4<A, B, C, D>
export function add<A, B, C>(value: C): (tuple: Tuple2<A, B>) => Tuple3<A, B, C>
export function add<A, B>(value: B): (tuple: Tuple1<A>) => Tuple2<A, B>
export function add(value: any): any {
  return (tuple: AnyTuple) => tupleFn.apply(undefined, tuple.values.concat(value))
}
