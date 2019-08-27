import { Tuple1, Tuple2, Tuple3, Tuple4 } from './type.tuple'
import { tuple as tupleFn } from './fn.tuple'

type AnyTuple = Tuple4<any, any, any, any> | Tuple3<any, any, any> | Tuple2<any, any> | Tuple1<any>

interface Map4<A, B, C, D> {
  (index: 0): <T>(fn: (x: A) => T) => Tuple4<T, B, C, D>
  (index: 1): <T>(fn: (x: B) => T) => Tuple4<A, T, C, D>
  (index: 2): <T>(fn: (x: C) => T) => Tuple4<A, B, T, D>
  (index: 3): <T>(fn: (x: D) => T) => Tuple4<A, B, C, T>
}

interface Map3<A, B, C> {
  (index: 0): <T>(fn: (x: A) => T) => Tuple3<T, B, C>
  (index: 1): <T>(fn: (x: B) => T) => Tuple3<A, T, C>
  (index: 2): <T>(fn: (x: C) => T) => Tuple3<A, B, T>
}

interface Map2<A, B> {
  (index: 0): <T>(fn: (x: A) => T) => Tuple2<T, B>
  (index: 1): <T>(fn: (x: B) => T) => Tuple2<A, T>
}

interface Map1<A> {
  (index: 0): <T>(fn: (x: A) => T) => Tuple1<T>
}

export function map<A, B, C, D>(tuple: Tuple4<A, B, C, D>): Map4<A, B, C, D>
export function map<A, B, C>(tuple: Tuple3<A, B, C>): Map3<A, B, C>
export function map<A, B>(tuple: Tuple2<A, B>): Map2<A, B>
export function map<A>(tuple: Tuple1<A>): Map1<A>
export function map(tuple: AnyTuple): any {
  return (index: number) => (fn: (x: any) => any) =>
    tupleFn.apply(undefined, tuple.values.map((v, i) => (i === index ? fn(v) : v)))
}
