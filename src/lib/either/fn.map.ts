import { Either } from './type.either'
import { isRight } from './fn.is-right'
import { right } from './fn.right'
import { Left } from './type.left'
import { Right } from './type.right'

export function map<R, B>(f: (a: R) => B): <L>(e: Left<L>) => Left<L>
export function map<R, B>(f: (a: R) => B): <L>(e: Right<R>) => Right<B>
export function map<R, B>(f: (a: R) => B): <L>(e: Either<L, R>) => Either<L, B>
export function map<R, B>(f: (a: R) => B): <L>(e: Either<L, R>) => Either<L, B> {
  return e => (isRight(e) ? right(f(e.value)) : e)
}
