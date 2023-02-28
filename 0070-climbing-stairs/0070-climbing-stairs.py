class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {}
        return self.climb(n, memo)

    def climb(self, n, memo):
        if n in memo:
            return memo[n]
        if n == 1:
            memo[n] = 1
        elif n == 2:
            memo[n] = 2
        else:
            memo[n] = self.climb(n-1, memo) + self.climb(n-2, memo)
        return memo[n]
