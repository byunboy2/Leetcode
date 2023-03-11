/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  const n = s.length;
  let maxLen = 0;
  let start = 0;
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
  
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] === s[j] && (j - i <= 1 || dp[i+1][j-1])) {
        dp[i][j] = true;
        if (j - i + 1 > maxLen) {
          maxLen = j - i + 1;
          start = i;
        }
      }
    }
  }
  
  return s.slice(start, start + maxLen);
}
