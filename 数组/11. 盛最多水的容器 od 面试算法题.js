/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针解法
var maxArea = function (height) {
  function getWater(i, j, height) {
    return (j - i) * Math.min(height[i], height[j]);
  }
  let result = 0;
  let temp;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    temp = getWater(i, j, height);
    result = result > temp ? result : temp;
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return result;
};
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
