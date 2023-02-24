class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        unique_num = set(nums)
        return len(unique_num)-1 if 0 in unique_num else len(unique_num)

