/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    let startFromZero = helper(nums,0,nums.length-2);
    let startFromOne = helper(nums,1,nums.length-1);
    return Math.max(startFromZero,startFromOne);
};

var helper = function(nums,start, end){
    let [rob1,rob2] = [0,0];
    for(let i = start; i<=end; i++){
        temp = rob1+nums[i];
        rob1 = rob2;
        rob2 = Math.max(temp,rob1);
    }
    return rob2;
}