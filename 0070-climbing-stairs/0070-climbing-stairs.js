/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let [firstCombination, secondCombination] = [1,1];
    let thirdCombination = 1;
    for(let index = n-2 ; 0<=index ; index--){
        thirdCombination = firstCombination+secondCombination;
        secondCombination = firstCombination;
        firstCombination = thirdCombination;
    }
    return thirdCombination;
};