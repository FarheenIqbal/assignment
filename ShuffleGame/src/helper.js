export function shuffle(arr) {
  const newArr = arr;
  for (let i = newArr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}
