/**
 * 给你两个数组，arr1 和 arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

 

示例：

输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
### 解题思路
此处撰写解题思路

### 代码

```javascript
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
/**
 * 思路分析
 * 1.分两部分处理，一部分是和arr2的共同元素，循环放入结果数组
 * 2.一部分是arr2中没有的 单独拿出来排序后放在结果数组的末尾
 * 
 */
var relativeSortArray = function (arr1, arr2) {
    let result = []
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] == arr2[i]) {
                result.push(arr1[j])
                arr1.splice(j, 1)
            //删除arr1中的数后要回退一下下标
                j--
            }
        }
    }
    //整合arr1中剩余的值
    return result.concat(arr1.sort((a, b) => {
        return a - b
    }))
}

relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6])

/**
 * 别人家的思路
 * 直接一个sort方法搞定~
 * 
 */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
//sort还能这样用，学到了~~
var relativeSortArray = function (arr1, arr2) {
    return arr1.sort((a,b) => {
        let ia = arr2.indexOf(a);
        let ib = arr2.indexOf(b);
        if (ia === -1 && ib === -1) { // 如果两个元素都不在arr2中按升序排列
            return a - b
        } else if (ia === -1) { // 如果有一个不在arr2中（a），另一个在arr2中(b)不在arr中的元素要排在后面
            return 1
        } else if (ia !== -1 && ib !== -1) { // 如果两个元素都在arr2中，他们的顺序跟在arr2中一致
          return ia - ib
        }
    })
};
// 作者：storm-24
// 链接：https://leetcode-cn.com/problems/relative-sort-array/solution/sortfang-fa-zui-jing-jian-fang-shi-by-storm-24/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。