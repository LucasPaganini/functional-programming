import { Leaf } from './type.leaf'
import { Node } from './type.node'

export type Tree<A> = Leaf<A> | Node<A>
