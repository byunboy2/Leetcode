/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  const n = s.length;
  const dp = Array(n).fill().map(() => Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  let start = 0, maxLength = 1;
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i+1]) {
      dp[i][i+1] = true;
      start = i;
      maxLength = 2;
    }
  }

  for (let k = 3; k <= n; k++) {
    for (let i = 0; i <= n - k; i++) {
      const j = i + k - 1;
      if (s[i] === s[j] && dp[i+1][j-1]) {
        dp[i][j] = true;
        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }
  return s.substr(start, maxLength);
}
