import { Sum } from "./classes";
import { fold } from "./functions";

const r = fold(Sum)([1, 2, 3, 4, 5]);
console.log({ r });
