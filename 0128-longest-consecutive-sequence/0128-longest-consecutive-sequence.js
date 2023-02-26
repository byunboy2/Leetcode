var longestConsecutive = function(nums) {
    if(nums.length===0) return 0;
    nums.sort((a,b)=>a-b)
    let uniqueNums = new Set(nums);
    let num = Array.from(uniqueNums)
    let longestLength = 1;
    let currentLength = 1;
    for(let index = 1 ; index<num.length ;index++){
        if(num[index] === num[index-1]+1){
            currentLength++;
            longestLength = Math.max(currentLength,longestLength);
        } else {
            longestLength = Math.max(currentLength,longestLength);
            currentLength = 1;
        }
    }
    return longestLength;
};