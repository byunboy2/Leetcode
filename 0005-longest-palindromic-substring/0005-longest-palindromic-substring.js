/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 0) return "";
  if (s.length === 1) return s[0];

  var findPalindrome = function(start, end) {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      start--;
      end++;
    }
    return s.substring(start + 1, end);
  };

  var evenPalindrome, oddPalindrome;
  for (let i = 0; i < s.length; i++) {
    let even = findPalindrome(i, i + 1);
    let odd = findPalindrome(i, i);
    if (!evenPalindrome || even.length > evenPalindrome.length) {
      evenPalindrome = even;
    }
    if (!oddPalindrome || odd.length > oddPalindrome.length) {
      oddPalindrome = odd;
    }
  }

  return evenPalindrome.length > oddPalindrome.length
    ? evenPalindrome
    : oddPalindrome;
};
