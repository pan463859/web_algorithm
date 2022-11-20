/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
    const sortedNums = nums.sort((a, b) => a - b)
    let count = 0
    const findLeaf = (nums, temp, startIndex) => {
        
        if (temp.length == 3) {
            console.log(temp)
            count++
            return
        }
        for (let i = startIndex; i < sortedNums.length; i++) {
            const curitem = nums[i]
            if (!temp.includes(curitem)) {
                temp.push(nums[i])
                findLeaf(nums, temp, i + 1)
                temp.pop()
            } else {
                continue 
            }
        }
    }
    findLeaf(sortedNums, [], 0)
    return count
};
unequalTriplets([1,3,1,2,4])
