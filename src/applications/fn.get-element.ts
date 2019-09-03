import { Maybe, fromNullable } from '../lib/maybe'

export const getElement = (root: HTMLElement) => (query: string): Maybe<HTMLElement> =>
  fromNullable(root.querySelector(query))
