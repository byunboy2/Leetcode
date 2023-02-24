function minimumOperations(nums: number[]): number {
    let uniqueNums = new Set(nums);
    return uniqueNums.has(0) ? uniqueNums.size -1 : uniqueNums.size;
};