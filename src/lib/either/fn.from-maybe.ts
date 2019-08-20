import { Maybe, isSome, None, Some } from '../maybe'
import { Either } from './type.either'
import { right } from './fn.right'
import { left } from './fn.left'
import { Left } from './type.left'
import { Right } from './type.right'

export function fromMaybe<L>(err: L): (m: None) => Left<L>
export function fromMaybe<L>(err: L): <R>(m: Some<R>) => Right<R>
export function fromMaybe<L>(err: L): <R>(m: Maybe<R>) => Either<L, R> {
  return m => (isSome(m) ? right(m.value) : left(err))
}
