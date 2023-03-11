/**

@param {string} s
@return {string}
*/
function longestPalindrome(s) {
    const length = s.length;
    let maxLength = 0;
    let startingIndex = 0;
    const dp = Array.from({ length }, () => Array.from({ length }, () => false));
    
    for (let i = length - 1; i >= 0; i--) {
    for (let j = i; j < length; j++) {
    if (s[i] === s[j] && (j - i <= 1 || dp[i+1][j-1])) {
    dp[i][j] = true;
    if (j - i + 1 > maxLength) {
    maxLength = j - i + 1;
    startingIndex = i;
    }}}}
    
    return s.slice(startingIndex, startingIndex + maxLength);
}