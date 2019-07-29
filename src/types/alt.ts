export interface Alt<A> {
  alt(other: Alt<A>): Alt<A>;
}
