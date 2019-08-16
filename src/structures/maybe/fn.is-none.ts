import { Maybe } from './type.maybe'
import { None } from './type.none'

export const isNone = <A>(m: Maybe<A>): m is None => m._tag === 'None'
