/*
在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。

说明: 

如果题目有解，该答案即为唯一答案。
输入数组均为非空数组，且长度相同。
输入数组中的元素均为非负数。
示例 1:

输入: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

输出: 3
*/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
//思路
/**
 * 1.每次在gas[i]加油，到gas[i+1]路上会小号cost[i]的油
 * 2.成功条件就是每次的油的总量在减去cost[i]的时候大于零，持续到cost长度结束
 * 3.操作两个数组太麻烦，直接先进行数组合并
 * 4.合并后成功条件就变成allgas+newarr[i]-newarr[i+1]要持续大于等于零，如果小于零则以newarr[i+0]为起点判断
 * 5.循环结束后存在符合条件的就返回该点在原数组中的下标，否则返回-1
 */
/*
在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。

说明: 

如果题目有解，该答案即为唯一答案。
输入数组均为非空数组，且长度相同。
输入数组中的元素均为非负数。
示例 1:

输入: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

输出: 3
*/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
//思路
/**
 * 1.每次在gas[i]加油，到gas[i+1]路上会小号cost[i]的油
 * 2.成功条件就是每次的油的总量在减去cost[i]的时候大于零，持续到cost长度结束
 * 3.操作两个数组太麻烦，直接先进行数组合并
 * 4.合并后成功条件就变成allgas+newarr[i]-newarr[i+1]要持续大于等于零，如果小于零则以newarr[i+0]为起点判断
 * 5.循环结束后存在符合条件的就返回该点在原数组中的下标，否则返回-1
 */
var canCompleteCircuit = function (gas, cost) {
    let gascost = []
    for (let i = 0; i < gas.length; i++) {
        gascost.push(gas[i])
        gascost.push(cost[i])
    }
    let shifttime = gas.length
    let result
    while (shifttime) {
        let allgas = 0
        for (let j = 0; j < gascost.length; j = j + 2) {
            allgas += gascost[j] - gascost[j + 1]
            if (allgas < 0) {
                break
            } else {
                continue
            }
        }
        if (allgas >= 0) {
            result = gas.length - shifttime
            break
        }
        let tempgas = gascost.shift()
        let tempcost = gascost.shift()
        gascost.push(tempgas)
        gascost.push(tempcost)
        shifttime--
    }
    return result ? result : -1


};
canCompleteCircuit([3,1,1],
    [1,2,2])