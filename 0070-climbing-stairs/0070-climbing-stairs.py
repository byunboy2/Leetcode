class Solution:
    def climbStairs(self, n: int) -> int:
        first_combination,second_combination,third_combination = [1,1,1]
        for i in range(n-1,0,-1):
            third_combination = first_combination + second_combination
            second_combination = first_combination
            first_combination = third_combination
        return third_combination