function longestPalindrome(s) {
  let res = '';
  let resLen = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > resLen) {
        res = s.slice(left, right + 1);
        resLen = right - left + 1;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // odd length
    expandAroundCenter(i, i);

    // even length
    expandAroundCenter(i, i + 1);
  }

  return res;
}
