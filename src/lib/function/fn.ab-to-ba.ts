export function abToBa<A, B, C>(fn: (a: A) => (b: B) => C): (b: B) => (a: A) => C {
  return b => a => fn(a)(b)
}
