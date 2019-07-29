import { Monoid, MonoidT, Factory } from "../types";
import { concat } from "./concat";

type Fold = <T, M extends Monoid<M>>(
  M: MonoidT<M> & Factory<T, M>
) => (xs: Array<T>) => M;
export const fold: Fold = M => xs =>
  xs.reduce((acc, x) => concat(acc)(M(x)), M.empty());
