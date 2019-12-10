type Flip = <A, B, C>(f: (a: A) => (b: B) => C) => (b: B) => (a: A) => C
export const flip: Flip = f => b => a => f(a)(b)
