import { Setoid } from '..'
import { not } from './fn.not'
import { pipe } from './fn.pipe'

type NotEquals = <T extends Setoid>(x: T) => (y: T) => boolean
export const notEquals: NotEquals = x => pipe(x.equals)(not)
