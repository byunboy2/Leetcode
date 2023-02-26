function longestConsecutive(nums: number[]): number {
    let uniqueNums = new Set(nums);
    let maxLength = 0;
    for(const num of uniqueNums){
        if(uniqueNums.has(num-1)) continue;
        let currentLength = 1;
        let currentNum = num
        while(uniqueNums.has(currentNum+1)){
            currentLength++;
            currentNum+=1;
        }
        maxLength = Math.max(maxLength,currentLength);
    }
    return maxLength
};