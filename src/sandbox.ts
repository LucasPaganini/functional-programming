import { Task } from "./classes";

const r = Task<number>(res => res(123));
const r2 = r.map(n => "test");

console.log({ r2 }, r2());
