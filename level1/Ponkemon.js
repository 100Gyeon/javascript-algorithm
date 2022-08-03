function solution(nums) {
  const half = nums.length / 2;
  const numSet = new Set(nums);
  const filteredList = Array.from(numSet);
  const filteredListLength = filteredList.length;

  return half < filteredListLength ? half : filteredListLength;
}
