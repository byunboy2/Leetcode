public class Solution {
    public int Rob(int[] nums) {
        List<int> dp = Enumerable.Repeat(0, nums.Length + 1).ToList();
        dp[1] = nums[0];
        for (int i = 2; i <= nums.Length; i++) {
            dp[i] = Math.Max(dp[i - 2] + nums[i - 1], dp[i - 1]);
        }
        return dp[nums.Length];
    }
}

