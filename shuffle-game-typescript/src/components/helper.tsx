export function shuffle<T>(arr: T[]): T[] {
  const newArr: T[] = arr;
  for (let i: number = newArr.length - 1; i >= 0; i--) {
    const j: number = Math.floor(Math.random() * i);
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}
