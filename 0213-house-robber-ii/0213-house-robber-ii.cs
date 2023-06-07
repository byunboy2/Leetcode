public class Solution {
    public int Rob(int[] nums) {
        if(nums.Length == 1) return nums[0];
        return Math.Max(Helper(nums, 0, nums.Length-1), Helper(nums, 1, nums.Length));
    }
    
    public int Helper(int[] nums, int start, int end) {
        List<int> dp = Enumerable.Repeat(0, nums.Length+2).ToList();
        
        for (int i = start; i < end; i++) {
            int curr = nums[i];
            
            // Calculate the maximum amount that can be robbed
            dp[i+2] = Math.Max(dp[i+1], dp[i] + curr);
        }
        
        return dp[end+1];
    }
}
