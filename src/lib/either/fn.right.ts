import { Right } from './type.right'

export function right<A>(value: A): Right<A> {
  return { _tag: 'Right', value }
}
