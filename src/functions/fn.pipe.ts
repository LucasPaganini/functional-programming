type Pipe = <A, B>(f: (a: A) => B) => <C>(g: (b: B) => C) => (a: A) => C
export const pipe: Pipe = f => g => a => g(f(a))
