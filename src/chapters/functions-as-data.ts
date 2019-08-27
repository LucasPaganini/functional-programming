/**
 * `sum :: Number -> Number -> Number`
 */
function sum(a: number, b: number): number {
  return a + b
}

/**
 * `isOdd :: Int -> Boolean`
 */
function isOdd(value: number): boolean {
  return !!(value % 2)
}

/**
 * `noobFilter :: [Int] -> [Int]`
 */
function noobFilter(list: Array<number>): Array<number> {
  const listWithOdds = []
  for (let i = 0; i < list.length; i++) {
    const value = list[i]
    if (isOdd(value)) listWithOdds.push(value)
  }
  return listWithOdds
}

noobFilter([1, 2, 3]) // [1, 3]

sum(1, 2) // 3

const x = 1
const y = 2
sum(x, y) // 3

/**
 * `lessNoobFilter :: [Int] -> (Int -> Boolean) -> [Int]`
 */
function lessNoobFilter(list: Array<number>, shouldKeep: (value: number) => boolean): Array<number> {
  const newList = []
  for (let i = 0; i < list.length; i++) {
    const value = list[i]
    if (shouldKeep(value)) newList.push(value)
  }
  return newList
}

lessNoobFilter([1, 2, 3], isOdd) // [1, 3]

/**
 * `crazyyyyyyyySum :: Int -> Int -> Int`
 */
function crazyyyyyyyySum(a: number) {
  return function(b: number): number {
    return a + b
  }
}

lessNoobFilter([1, 5, 10], function(value: number) {
  return value > 10
})

function noobGreaterThan(a: number, b: number): boolean {
  return a > b
}

lessNoobFilter([1, 5, 10], function(value: number) {
  return noobGreaterThan(value, 10)
})

function yodaGreaterThan(b: number) {
  return function(a: number): boolean {
    return a > b
  }
}

lessNoobFilter([1, 5, 10], yodaGreaterThan(2))
