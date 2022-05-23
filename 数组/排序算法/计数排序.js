function countSort(A) {
    const B = []
    for (let i = 0; i < A.length; i++) {
        const j = A[i]
        B[j] >= 1 ? B[j]++ : (B[j] = 1)
    }
    console.log(B)
    const C = []
    for (let j = 0; j < B.length; j++) {
        if (B[j]) {
            while (B[j] > 0) {
                C.push(j)
                B[j]--
            }
        }
    }
    return C
}
const A = [3, 5, 3, 1, 6, 4, 7, 2, 3]
console.log(countSort(A))