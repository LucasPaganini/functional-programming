import { Some } from './type.some'

export const some = <A>(value: A): Some<A> => ({ _tag: 'Some', value })
