function rob(nums: number[]): number {
    let [maxSum,adjacentSum,nonAdjacentSum] = [0,0,0];
    for(const num of nums){
        maxSum = Math.max(maxSum,nonAdjacentSum+num);
        nonAdjacentSum = adjacentSum;
        adjacentSum = maxSum;
    }
    return maxSum;
};