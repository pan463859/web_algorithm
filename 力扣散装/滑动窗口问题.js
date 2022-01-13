/**
 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
    [1 3 -1] -3 5 3 6 7
    1 [3 -1 -3] 5 3 6 7
    1 3 [-1 -3 5] 3 6 7
    1 3 -1 [-3 5 3] 6 7
    1 3 -1 -3 [5 3 6] 7
    1 3 -1 -3 5 [3 6 7]
 */
//双指针+遍历法
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// const maxSlidingWindow = function (nums, k) {
//     // 缓存数组的长度
//     const len = nums.length;
//     // 定义结果数组
//     const res = [];
//     // 初始化左指针
//     let left = 0;
//     // 初始化右指针
//     let right = k - 1;
//     // 当数组没有被遍历完时，执行循环体内的逻辑
//     while (right < len) {
//       // 计算当前窗口内的最大值
//       const max = calMax(nums, left, right);
//       // 将最大值推入结果数组
//       res.push(max);
//       // 左指针前进一步
//       left++;
//       // 右指针前进一步
//       right++;
//     }
//     // 返回结果数组
//     return res;
//   };
  
//   // 这个函数用来计算最大值 或者math.max
//   function calMax(arr, left, right) {
//     // 处理数组为空的边界情况
//     if (!arr || !arr.length) {
//       return;
//     }
//     // 初始化 maxNum 的值为窗口内第一个元素
//     let maxNum = arr[left];
//     // 遍历窗口内所有元素，更新 maxNum 的值
//     for (let i = left; i <= right; i++) {
//       if (arr[i] > maxNum) {
//         maxNum = arr[i];
//       }
//     }
//     // 返回最大值
//     return maxNum;
//   }

  //滑动窗口双端队列
  //思路：使用一个双端队列保存当前最大值为队尾的递减队列
  const maxSlidingWindow = function (nums, k) {
    // 缓存数组的长度
    const len = nums.length;
    // 初始化结果数组
    const res = [];
    // 初始化双端队列
    const deque = [];
    // 开始遍历数组
    for (let i = 0; i < len; i++) {
      // 当队尾元素小于当前元素时
      while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
        // 将队尾元素（索引）不断出队，直至队尾元素大于等于当前元素
        deque.pop();
      }
      // 入队当前元素索引（注意是索引）
      deque.push(i);
      // 当队头元素的索引已经被排除在滑动窗口之外时
      while (deque.length && deque[0] <= i - k) {
        // 将队头元素索引出队
        deque.shift();
      }
      // 判断滑动窗口的状态，只有在被遍历的元素个数大于 k 的时候，才更新结果数组
      if (i >= k - 1) {
        res.push(nums[deque[0]]);
      }
    }
    // 返回结果数组
    return res;
  };
  maxSlidingWindow([3,1,-1,-2],3)