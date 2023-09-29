/* Sum of array */

const sumArrayV3 = (nums: number[]): number[] => {
  let sum = 0;
  return nums.map((num) => (sum += num));
}

const numsV3: number[] = [3, 1, 2, 10, 1];

console.log(`original array: ${numsV3}`);
console.log(`sum array: ${sumArrayV3(numsV3)}`);