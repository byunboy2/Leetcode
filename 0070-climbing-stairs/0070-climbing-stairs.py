class Solution:
    def climbStairs(self, n: int) -> int:
        total_ways, first_way, second_way= 0,0,1
        for i in range(n):
            total_ways = first_way + second_way
            first_way = second_way
            second_way = total_ways
        return total_ways
