class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1: return nums[0]
        def dp(start,end):
            max_sum, adjacent_sum, non_adjacent_sum = 0,0,0
            for i in range(start,end):
                max_sum = max(max_sum,non_adjacent_sum+nums[i])
                non_adjacent_sum = adjacent_sum
                adjacent_sum = max_sum
            return max_sum
        return max(dp(0,len(nums)-1),dp(1,len(nums)))
    
    # a b c d e f g h 
    # 0 1 2 3 4 5 6 7