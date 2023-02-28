/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    
    // helper function to calculate maximum robbery amount for a given range of houses
    function robRange(start, end) {
        let prevMax = 0, currMax = 0;
        for (let i = start; i <= end; i++) {
            let temp = currMax;
            currMax = Math.max(currMax, prevMax + nums[i]);
            prevMax = temp;
        }
        return currMax;
    }
    
    // rob either the first house or the last house, but not both
    return Math.max(robRange(0, nums.length - 2), robRange(1, nums.length - 1));
};
