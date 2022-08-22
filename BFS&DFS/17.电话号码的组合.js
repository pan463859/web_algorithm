/**
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

输入：digits = ""
输出：[]

输入：digits = "2"
输出：["a","b","c"]

 */
/**
 * @param {string} digits
 * @return {string[]}
 */
/**
 * 思考：需要找到全部组合我们就考虑使用深度优先或者广度优先
 * 深度优先要使用递归
 * 递归就要抽象出子问题，找到递归结束条件
 *
 */

// DFS 解法
const letterCombinations = (digits) => {
  const numbermap = {
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  if (digits.length == 0) return [];
  const res = [];
  const dfs = (tempstr, i) => {
    if (i == digits.length) {
      // 位置都坐满了，推入结果数组
      res.push(tempstr);
      return;
    }
    // 找到当前数字对应的所有字母，遍历添加
    const letters = numbermap[digits[i]];
    for (const letter of letters) {
      // for 循环递归拼接字符串
      dfs(tempstr + letter, i + 1);
    }
  };
  dfs("", 0);
  return res;
};

// BFS

const letterCombinations = (digits) => {
  const numbermap = {
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  if (digits.length == 0) return [];
  digits.split("").map((item) => numbermap[item].split(""));
  const queue = [];
  queue.push("");
  while (queue.length) {
    for (let i = 0; i < digits.length; i++) {
      const levelSize = queue.length;
      for (let j = 0; j < levelSize; j++) {
        const curStr = queue.shift();
        const letters = map[digits[i]];
        for (const l of letters) {
          queue.push(curStr + l);
        }
      }
    }
    return queue; //队里中剩余的就是结果数组
  }
};
