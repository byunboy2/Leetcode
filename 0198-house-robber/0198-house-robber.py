class Solution:
    def rob(self, nums: List[int]) -> int:
        prev_max,curr_max = 0,0
        for i in range(len(nums)):
            temp_max = curr_max
            curr_max = max(curr_max,prev_max+nums[i])
            prev_max = temp_max
        return curr_max