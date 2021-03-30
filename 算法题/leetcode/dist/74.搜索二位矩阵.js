/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target,isOnedimendArr=false) {
    let l = 0
    let r = matrix.length
    while (l < r - 1) {
        let mid = Math.floor((l + r) / 2)
        if (target >= (isOnedimendArr?matrix[mid]:matrix[mid][0])) {
            l = mid
        } else {
            r = mid
        }
    }
    if (Array.isArray(matrix[l])) {
        return searchMatrix(matrix[l],target,true)
    }else{
        return matrix[l]==target
    }
};
searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]]
    ,3)
