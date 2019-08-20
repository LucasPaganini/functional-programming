import { Either } from './type.either'
import { Right } from './type.right'

export function isRight<A>(e: Either<any, A>): e is Right<A> {
  return e._tag === 'Right'
}
