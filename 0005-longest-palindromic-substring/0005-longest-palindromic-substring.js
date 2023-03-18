/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const length = s.length;
    const dp = new Array(length).fill(false);
    let start = 0;
    let end = 0;
    
    for(let right = 0; right<length ; right++){
        for(let left = 0 ; left<=right; left++){
            if(s[left]===s[right] && (right-left<2 || dp[left+1])){
                dp[left] = true;
                if(right-left>=end-start){
                    start = left;
                    end = right;
                }
            } else {
                dp[left] = false; 
            }
        }
    }
    return s.slice(start, end+1);
};
