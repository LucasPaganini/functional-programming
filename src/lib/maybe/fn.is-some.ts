import { Maybe } from './type.maybe'
import { Some } from './type.some'

export const isSome = <A>(m: Maybe<A>): m is Some<A> => m._tag === 'Some'
