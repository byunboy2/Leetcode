class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        return x == float(str(x)[::-1])