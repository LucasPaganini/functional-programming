import { Either } from './type.either'
import { right } from './fn.right'
import { left } from './fn.left'

export function fromNullable<L>(err: L): <R>(value: R | null | undefined) => Either<L, R> {
  return value => (value === null || value === undefined ? left(err) : right(value))
}
