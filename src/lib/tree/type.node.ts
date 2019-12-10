import { Tree } from './type.tree'

export interface Node<A> {
  readonly _tag: 'Node'
  readonly left: Tree<A>
  readonly right: Tree<A>
}
