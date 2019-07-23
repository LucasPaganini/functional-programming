import { isUndefined, isNull } from "../functions";
import { Some } from "./some";
import { None } from "./none";

export type Maybe<T> = Some<T> | None;

interface MaybeFactory {
  <T>(x: T | null | undefined): Maybe<T>;
}

export const Maybe: MaybeFactory = <T>(x: T | null | undefined) =>
  isUndefined(x) || isNull(x) ? None() : Some(x);
