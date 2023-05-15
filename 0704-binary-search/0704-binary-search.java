public class Solution {
    public int search(int[] nums, int target) {
        int start = 0;
        int end = nums.length-1;
        while(start<=end){
            int mid = (end+start)/2;
            if(target==nums[mid]) return mid;
            if(nums[mid]>target) end = mid - 1;
            if(nums[mid]<target) start = mid + 1 ;
    }
    return -1;
    }
}


