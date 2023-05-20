/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0;
    let reference = Array(nums.length+1).fill(0);
    reference[1] = nums[0];
    
    for(let i = 2; i<=nums.length; i++){
        reference[i] = Math.max(reference[i-1],reference[i-2]+nums[i-1]);
    }
    return reference[nums.length];
};
