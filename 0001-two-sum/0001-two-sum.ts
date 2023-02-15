/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums: number[], target: number): number[] {
    let array = []
    for(let i = 0 ; i<nums.length;i++){
        let targetPair = target-nums[i];
        if(array.includes(targetPair)) return [i,array.indexOf(targetPair)]
        array.push(nums[i])
    }
};