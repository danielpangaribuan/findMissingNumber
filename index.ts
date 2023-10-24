function findMissingNumber(arr: number[]): number {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  let arrSum = arr.reduce((a, b) => a + b, 0);

  return sum - arrSum;
}

console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8, 9]));
