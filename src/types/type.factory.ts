export interface Factory<A> {
  (...args: any[]): A
}
