import { Either } from './type.either'
import { isRight } from './fn.is-right'
import { Right } from './type.right'
import { Left } from './type.left'

export function alt<R>(e1: Right<R>): (e2: Either<any, any>) => Right<R>
export function alt(e1: Either<any, any>): <R>(e2: Right<R>) => Right<R>
export function alt<L>(e1: Left<L>): (e2: Left<L>) => Left<L>
export function alt<L, R>(e1: Either<L, R>): (e2: Either<L, R>) => Either<L, R>
export function alt<L, R>(e1: Either<L, R>): (e2: Either<L, R>) => Either<L, R> {
  return e2 => (isRight(e1) ? e1 : e2)
}
