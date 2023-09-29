/* Sum of array */

const sumArray = (nums: number[]): number[] => {
  const result: number[] = [];
  let sum: number = 0;

  for (const num of nums) {
    sum += num;
    result.push(sum);
  }

  return result;
}

const nums: number[] = [3, 1, 2, 10, 1];

console.log(`original array: ${nums}`);
console.log(`sum array: ${sumArray(nums)}`);