/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let numbers = new Set(nums);
    return numbers.has(0) ? numbers.size-1 : numbers.size;
}