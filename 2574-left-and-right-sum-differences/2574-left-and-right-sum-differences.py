class Solution:
    def leftRigthDifference(self, nums: List[int]) -> List[int]:
        left_sum,right_sum,output,reverse_nums=[0],[0],[],nums[::-1]
        
        for i in range(0,len(nums)-1):
            left_sum.append(left_sum[i]+nums[i])
            right_sum.append(right_sum[i]+reverse_nums[i])
            
        reverse_right_sum = right_sum[::-1]
        
        for i in range(0,len(nums)):
            output.append(abs(left_sum[i]-reverse_right_sum[i]))
        return output