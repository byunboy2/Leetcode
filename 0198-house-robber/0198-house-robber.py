class Solution:
    def rob(self, nums: List[int]) -> int:
        nums_len = len(nums)
        if nums_len == 1: return nums[0]
        dp = [0] * nums_len
        
        dp[0], dp[1] = nums[0], max(nums[0], nums[1])
        
        for i in range(2, nums_len):
            dp[i] = max(dp[i-1], dp[i-2] + nums[i])
        
        return dp[nums_len-1]