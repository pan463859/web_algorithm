
//滑动窗口对象解法
var lengthOfLongestSubstring = function (s) {
    let cursituation = {}
    let i = 0
    let longeststr = 0
    for (let j = 0; j < s.length; j++) {
        //当前未重复，右指针持续右移
        if (cursituation[s[j]] === undefined || cursituation[s[j]] < i) {
            cursituation[s[j]] = j
            longeststr = j - i + 1 > longeststr ? j - i + 1 : longeststr
        }
        else {
            //发现重复元素,直接把 i 之放到该元素的历史位置，不用一个一个去遍历，还需要考虑这个老位置是否已经过来
            i = cursituation[s[j]] + 1
            cursituation[s[j]] = j
        }
    }
    return longeststr
};
//滑动窗口 Set 解法

var lengthOfLongestSubstring = function (s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = 0, ans = 0;
    for (let i = 0; i < n; ++i) {
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(i - 1));
        }
        while (rk < n && !occ.has(s.charAt(rk))) {
            // 不断地移动右指针
            occ.add(s.charAt(rk));
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i );
    }
    return ans;
};