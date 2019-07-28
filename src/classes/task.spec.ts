import { Task } from "./task";

describe("Task", () => {
  it("(f)", done => {
    const x = 123;
    Task<number>(res => res(x))()
      .then(_n => expect(_n).toBe(x))
      .then(done);
  });

  it("of(x)", done => {
    const x = 123;
    Task.of(x)()
      .then(_n => expect(_n).toBe(x))
      .then(done);
  });

  it("map(f)", done => {
    const x = 123;
    const y = "test";
    const f = (a: number) => y;

    Task.of(x)
      .map(f)()
      .then(v => expect(v).toBe(y))
      .then(done);
  });

  it("ap(other)", done => {
    const other = Task.of(() => "test");
    const that = Task.of(123);

    that
      .ap(other)()
      .then(v => expect(v).toBe("test"))
      .then(done);
  });
});
