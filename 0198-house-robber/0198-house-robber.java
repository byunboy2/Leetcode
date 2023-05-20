class Solution {
    public int rob(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        
        int[] reference = new int[nums.length + 1];
        reference[1] = nums[0];
        
        for (int i = 2; i <= nums.length; i++) {
            reference[i] = Math.max(reference[i - 1], reference[i - 2] + nums[i - 1]);
        }
        
        return reference[nums.length];
    }
}
