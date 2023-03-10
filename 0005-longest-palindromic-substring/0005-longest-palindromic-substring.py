class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        if n == 0:
            return ""
        
        start, end = 0, 0
        
        dp = [[False] * n for _ in range(n)]
 
        for i in range(n):
            dp[i][i] = True
            start, end = i, i
        
    
        for i in range(n-1, -1, -1):
            for j in range(i+1, n):
                if s[i] == s[j]:
                    if j - i == 1 or dp[i+1][j-1]:
                        dp[i][j] = True
                        if j - i > end - start:
                            start, end = i, j
                            
        return s[start:end+1]
