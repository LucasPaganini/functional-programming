import { Alt } from "./alt";
import { PlusT } from "./plus";

export interface Alternative<A> extends Alt<A> {}

export interface AlternativeT extends PlusT {}
