class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        output = [0] * n
        left_side = [1] * n
        right_side = [1] * n
        
        for i in range(1,n):
            left_side[i] = left_side[i-1] * nums[i-1]
        for i in range(n-2,-1,-1):
            right_side[i] = right_side[i+1] * nums[i+1]
        for i in range(n):
            output[i] = left_side[i] * right_side[i]
            
        return output
        
