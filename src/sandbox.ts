import { tuple, map } from './lib/tuple'

Promise.resolve('Hello')
  .then(v => tuple(v, 10))
  .then(t => map(t)(1)(x => 5))
