/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    const len = s.length;
    const dp = Array(len).fill(0).map(() => Array(len).fill(false));
    
    for(let right=0;right<len;right++){
        for(let left=0;left<=right;left++){
            if(s[left]===s[right] && (right-left<2 || dp[left+1][right-1])){
                count+=1;
                dp[left][right] = true;
            }
        }
    }
    return count;
};
