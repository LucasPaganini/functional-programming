import { Set } from './type.set'
import { uniq } from '../utils/functions'
import { Setoid } from '../utils'

export const set = <A extends Setoid>(values: Array<A>): Set<A> => ({
  _tag: 'Set',
  values: uniq(values),
})
