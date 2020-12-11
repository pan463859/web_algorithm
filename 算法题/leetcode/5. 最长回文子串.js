/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 
 */
//枚举所有的「回文中心」并尝试「扩展」，
// 直到无法扩展为止，此时的回文串长度即为此「回文中心」下的最长回文串长度。
// 我们对所有的长度求出最大值，即可得到最终的答案。

var expandAroundCenter = function (s, left, right) {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}
var longestPalindrome = function (s) {
    if (s == null || s.length < 1) {
        return "";
    }
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        //考虑i位置的为回文中心和i&&i+1一起为回文中心的两种情况
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        //取最大长度
        let len = Math.max(len1, len2);
        //根据最大长度取得起始坐标和结束坐标
        if (len > end - start) {
            start = i - (len) / 2 + 1;
            end = i + len / 2;
        }
    }
    //substring的参数自动回进行number.floor操作且左闭右开
    return s.substring(start, end + 1);
};

longestPalindrome('cbbd')
//Manacher 算法
// /imgs/5.
/**
 * j为右臂在最右边的回文字符串的中心
 * length为j的臂长
j+length-i>n的时候，由于i和2j-i是关于j对称的 n是j的臂长
所有i也最少有n的臂长
当j+length-i<n的s时候，说明i基于j的对称点的臂长超出了j的控制范围，也就是说i只能保证有j+length-i的臂长
多余超出j的臂长范围的不能保证还是回文
所有在两者中取最小值min(j + length - i, n)
那么我们就可以直接跳过 i 到 i + min(j + length - i, n) 这部分，从 i + min(j + length - i, n) + 1 开始拓展。

//对偶数字符串的处理
我们可以通过一个特别的操作将奇偶数的情况统一起来：我们向字符串的头尾以及每两个字符中间添加一个特殊字符 #，比如字符串 aaba 处理后会变成 #a#a#b#a#。那么原先长度为偶数的回文字符串 aa 会变成长度为奇数的回文字符串 #a#a#，而长度为奇数的回文字符串 aba 会变成长度仍然为奇数的回文字符串 #a#b#a#，我们就不需要再考虑长度为偶数的回文字符串了。
 */

