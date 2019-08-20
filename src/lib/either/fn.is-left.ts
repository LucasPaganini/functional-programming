import { Either } from './type.either'
import { Left } from './type.left'

export function isLeft<A>(e: Either<A, any>): e is Left<A> {
  return e._tag === 'Left'
}
