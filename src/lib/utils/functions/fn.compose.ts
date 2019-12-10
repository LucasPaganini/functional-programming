type Compose = <A, B, C>(f: (b: B) => C) => (g: (a: A) => B) => (x: A) => C;
export const compose: Compose = f => g => x => f(g(x));
