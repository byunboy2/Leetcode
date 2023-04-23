public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        /*
    Iterate through the nums array, get the complement each loop, check if myReference contains the complement, 
    return the current index and the value of the complement. if not add to the map a new key value pair 
    **/
        Dictionary<int,int> myReference = new Dictionary<int,int>();
        for(int i = 0; i < nums.Length; i++){
            int complement = target - nums[i];
            if(myReference.ContainsKey(complement)){
                return new int[] {i,myReference[complement]};
            }
            myReference[nums[i]] = i;
        }
        return new int[] {};
    }
}