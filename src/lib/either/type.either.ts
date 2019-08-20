import { Left } from './type.left'
import { Right } from './type.right'

export type Either<L, R> = Left<L> | Right<R>
