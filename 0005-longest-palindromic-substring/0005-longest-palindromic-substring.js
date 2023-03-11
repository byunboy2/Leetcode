/**

@param {string} s
@return {string}
*/
function longestPalindrome(s) {
    const length = s.length;
    let maxLength = 0;
    let startingIndex = 0;
    const dp = Array.from({ length }, () => Array.from({ length }, () => false));

    for (let left = length - 1; left >= 0; left--) {
        for (let right = left; right < length; right++) {
            if (s[left] === s[right] && (right - left <= 1 || dp[left+1][right-1])) {
                dp[left][right] = true;
                if (right - left + 1 > maxLength) {
                    maxLength = right - left + 1;
                    startingIndex = left;
    }}}}
return s.slice(startingIndex, startingIndex + maxLength);
};