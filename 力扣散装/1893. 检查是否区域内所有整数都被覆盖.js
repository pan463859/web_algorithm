/**
给你一个二维整数数组 ranges 和两个整数 left 和 right 。每个 ranges[i] = [starti, endi] 表示一个从 starti 到 endi 的 闭区间 。

如果闭区间 [left, right] 内每个整数都被 ranges 中 至少一个 区间覆盖，那么请你返回 true ，否则返回 false 。

已知区间 ranges[i] = [starti, endi] ，如果整数 x 满足 starti <= x <= endi ，那么我们称整数x 被覆盖了。

输入：ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
输出：true
解释：2 到 5 的每个整数都被覆盖了：
- 2 被第一个区间覆盖。
- 3 和 4 被第二个区间覆盖。
- 5 被第三个区间覆盖。

 */
//潘小安的暴力解法
// var isCovered = function(ranges, left, right) {
//     for(let i=left;i<=right;i++){
//         let isIin=false
//         for(let j=0;j<ranges.length;j++){
//             if(i>=ranges[j][0]&&i<=ranges[j][1]){
//                 isIin=true
//                 break
//             }else{
//                 continue
//             }
//         }
//         if(!isIin){
//             return  false
//         }
//     }
//     return true
// };
//大佬的差分数组+前缀和解法
var isCovered = function(ranges, left, right) {
    const diff = new Array(52).fill(0); // 差分数组
    for (const [l, r] of ranges) {
        diff[l]++;
        diff[r + 1]--;
    }
    // 前缀和
    let curr = 0;
    for (let i = 1; i < 51; i++) {
        curr += diff[i];
        if (left <= i && i <= right && curr <= 0) {
            return false;
        }
    }
    return true;
};
isCovered([[1,2],[2,4],[7,8]],2,5)

