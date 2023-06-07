using System;
using System.Collections.Generic;

public class Solution
{
    public int Rob(int[] nums)
    {
        return Math.Max(nums[0], Math.Max(Helper(nums[1..]), Helper(nums[..^1])));

    }

    public int Helper(int[] nums)
    {
        int rob1 = 0;
        int rob2 = 0;

        foreach (int n in nums)
        {
            int newRob = Math.Max(rob1 + n, rob2);
            rob1 = rob2;
            rob2 = newRob;
        }
        return rob2;
    }
}
