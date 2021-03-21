/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划
// var lengthOfLIS = function (nums) {
//     //1.递推公式 nums = [10,9,2,5,3,7,101,18]
//     let n = nums.length
//     if (n == 0) {
//         return 0
//     }
//     let dp = new Array(n).fill(1)
//     // [1,1,1,1,1,1,1,1]
//     for (let i = 0; i < n; i++) {
//         for(let j=0;j<i;j++){
//             if(nums[j]<nums[i]){
//                 dp[i]=Math.max(dp[i],dp[j]+1)
//             }
//         }
//     }
//     return Math.max(...dp)
// };
/**
 * @param {number[]} nums
 * @return {number}
 */

//贪心算法+二分查找
var lengthOfLIS = function (nums) {
    //[10,9,2,5,3,7,101,18]
    let length = nums.length
    if (length <= 1) {
        return length
    }
    let ret = [nums[0]]
    for (let i = 0; i < length; i++) {
        if (nums[i] > ret[ret.length - 1]) {
            ret.push(nums[i])
        } else {
            // 递增子序列里面找一个正好比他大的位置
            let left = 0
            let right = ret.length - 1
            while (left < right) {
                let mid = (left + right) >> 1
                if (ret[mid] < nums[i]) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
            ret[left] = nums[i]
        }

    };
    return ret.length
}
