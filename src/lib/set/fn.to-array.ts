import { Set } from './type.set'

export const toArray = <A>(set: Set<A>): Array<A> => set.values
