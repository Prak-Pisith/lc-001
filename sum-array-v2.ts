/* Sum of array */

const sumArrayV2 = (nums: number[]): number[] => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
}

const numsV2: number[] = [3, 1, 2, 10, 1];

console.log(`original array: ${numsV2}`);
console.log(`sum array: ${sumArrayV2(numsV2)}`);