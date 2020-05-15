let nums = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(nums){
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < nums.length; j++) {
      sumFixedStart += nums[j];
      maxSum = Math.max(maxSum, sumFixedStart);
   }
  }
  return maxSum;
}
largestSubarraySum(nums)
