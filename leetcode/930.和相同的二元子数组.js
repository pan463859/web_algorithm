/**
 * 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。

子数组 是数组的一段连续部分。

 

示例 1：

输入：nums = [1,0,1,0,1], goal = 2
输出：4
解释：
如下面黑体所示，有 4 个满足题目要求的子数组：
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
 */
//前缀和解法
//重点在于sum[j]-sum[i]==goal这个判断条件
//可以推导出sum[j]-goal==sum[i]，满足该条件的i，j区间就是符合条件的区间（j>i）
/*
比如说 nums=[1,2,3,4,5] goal=7
前缀和数组为sum=[0,1,3,6,10,15]
sum[1]-sum[0]=nums[0]
根据sum[j]-sum[i]==goal条件来推算出的sum[j]-goal==sum[i]
即在sum[4]-goal==sum[2]时候符合要求
也就是原数组中的sum[4]-sum[2]=num[2]+num[3]符合要求
*/
var numSubarraysWithSum = function (nums, goal) {
    let sum = 0;
    let cnt = new Map()
    let ret = 0;
    for (const num of nums) {
        cnt.set(sum, (cnt.get(sum) || 0) + 1);
        sum += num;
        ret += cnt.get(sum - goal) || 0;
    }
    return ret;
}
//滑动窗口
/**
 * :todo如何去理解滑动窗口的逻辑
 */
var numSubarraysWithSum = function (nums, goal) {
    const n = nums.length;
    let left1 = 0, left2 = 0, right = 0;
    let sum1 = 0, sum2 = 0;
    let ret = 0;
    while (right < n) {
        sum1 += nums[right];
        while (left1 <= right && sum1 > goal) {
            sum1 -= nums[left1];
            left1++;
        }
        sum2 += nums[right];
        while (left2 <= right && sum2 >= goal) {
            sum2 -= nums[left2];
            left2++;
        }
        ret += left2 - left1;
        right++;
    }
    return ret;
};
numSubarraysWithSum([1, 0, 1, 0, 1], 2)

numSubarraysWithSum([1,0,1,0,1],2)