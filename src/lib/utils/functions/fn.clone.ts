type Clone = <T>(xs: Array<T>) => Array<T>;
export const clone: Clone = xs => [...xs];
