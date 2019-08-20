import { Either, Left, Right, isRight } from '../either'
import { Maybe } from './type.maybe'
import { None } from './type.none'
import { Some } from './type.some'
import { some } from './fn.some'
import { none } from './const.none'

export function fromEither<A>(e: Left<any>): None
export function fromEither<A>(e: Right<A>): Some<A>
export function fromEither<A>(e: Either<any, A>): Maybe<A>
export function fromEither<A>(e: Either<any, A>): Maybe<A> {
  return isRight(e) ? some(e.value) : none
}
