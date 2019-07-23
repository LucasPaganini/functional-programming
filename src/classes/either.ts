import { Left } from "./left";
import { Right } from "./right";

export type Either<E, T> = Left<E> | Right<T>;
