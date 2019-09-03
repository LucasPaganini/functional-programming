interface Clonable {
  clone(): this
}

interface Ord {
  lte(other: this): boolean
}

interface Just<A> extends Clonable, Ord {
  _tag: 'Just'
  value: A
}

const just = <A>(value: A): Just<A> => ({
  _tag: 'Just',
  value,
  clone() {
    return just(value)
  },
  lte(other) {
    return true
  },
})

const a = just(1)
const b = a.clone()

a.lte(b)

type ShadowCloneJutsu = <A extends Clonable>(a: A) => (ammount: number) => Array<A>
export const multiShadowCloneJutsu: ShadowCloneJutsu = ninja => ammount =>
  Array.from({ length: ammount }).map(ninja.clone)

function sum(a: string): (b: string) => string
function sum(a: number): (b: number) => number
function sum(a: number | string) {
  return (b: number | string) => a + b
}

const t = 123 + 'abc'
