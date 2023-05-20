/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let reference = Array(n+1).fill(0);
    reference[0] = 1;
    reference[1] = 1;
    for(let i = 2;i<reference.length;i++){
        reference[i] = reference[i-1] + reference[i-2];
    }
    return reference[n];
};
