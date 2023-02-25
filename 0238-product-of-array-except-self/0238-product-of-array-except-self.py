class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        length = len(nums)
        output = [0] * length
        left_product = [1] * length
        right_product = [1] * length 
        for i in range(1,length):
            left_product[i] = left_product[i-1] * nums[i-1]
        for i in range(length-2,-1,-1):
            right_product[i] = right_product[i+1] * nums[i+1]
        for i in range(0,length):
            output[i] = left_product[i] * right_product[i]
        return output