
var minimalKSum = function (nums, k) {
    let blocksum = 0
    nums=Array.from(new Set(nums.sort(function (a, b) { return a - b })))
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= k) {
            blocksum += nums[i]
            k++
            console.log(nums[i])
            console.log(k)
        }
        else { break }

    }
    return ((1 + k) * k) / 2 - blocksum
};
console.log(minimalKSum([1000000000],
    1000000000))