import { isUndefined, isNull } from '../lib/utils/functions'
import { Some } from './some'
import { None } from './none'

export type Maybe<T> = Some<T> | None<T>

interface MaybeT {
  <T>(x: T | null | undefined): Maybe<T>
}

export const Maybe: MaybeT = <T>(x: T | null | undefined) => (isUndefined(x) || isNull(x) ? None() : Some(x))
