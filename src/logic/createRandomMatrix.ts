export function createRandomMatrix(n: number, m: number): number[][] {
  return new Array(n).fill(0).map(() => new Array(m).fill(0).map(() => (Math.random() < 0.7 ? 0 : 1)))
}
