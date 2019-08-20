import { Either } from './type.either'
import { Left } from './type.left'
import { isRight } from './fn.is-right'

export function chain<A, L, R>(f: (a: A) => Either<L, R>): (e: Left<L>) => Left<L>
export function chain<A, L, R>(f: (a: A) => Either<L, R>): (e: Either<L, A>) => Either<L, R>
export function chain<A, L, R>(f: (a: A) => Either<L, R>): (e: Either<L, A>) => Either<L, R> {
  return e => (isRight(e) ? f(e.value) : e)
}
