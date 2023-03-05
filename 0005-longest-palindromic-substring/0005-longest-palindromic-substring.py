class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        if n == 0:
            return ""
        start, end = 0, 0
        for i in range(n):
            # check odd length palindromes centered at i
            left, right = i, i
            while left >= 0 and right < n and s[left] == s[right]:
                if right - left > end - start:
                    start, end = left, right
                left -= 1
                right += 1
            # check even length palindromes centered at i and i+1
            left, right = i, i+1
            while left >= 0 and right < n and s[left] == s[right]:
                if right - left > end - start:
                    start, end = left, right
                left -= 1
                right += 1
        return s[start:end+1]
