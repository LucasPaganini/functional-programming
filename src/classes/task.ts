import { CovariantFunctor, Apply, ApplicativeFactory } from "../types";

export interface Task<A> extends CovariantFunctor<A>, Apply<A> {
  (): Promise<A>;
  map<B>(fn: (a: A) => B): Task<B>;
  ap<B>(other: Task<(a: A) => B>): Task<B>;
}

interface TaskFactory extends ApplicativeFactory {
  <A>(fn: (resolve: (a: A) => void) => void): Task<A>;
  of<A>(a: A): Task<A>;
}

export const Task: TaskFactory = <A>(
  _fn: (resolve: (a: A) => void) => void
): Task<A> =>
  Object.assign(() => new Promise<A>(_fn), {
    map<B>(fn: (a: A) => B): Task<B> {
      return Task<B>(_res => {
        _fn(_a => {
          _res(fn(_a));
        });
      });
    },
    ap<B>(other: Task<(a: A) => B>): Task<B> {
      return Task<B>(async _res => {
        Promise.all([new Promise(_fn), other()]).then(([a, f]) => {
          _res(f(a));
        });
      });
    }
  });

Task.of = <A>(a: A): Task<A> => Task(res => res(a));
