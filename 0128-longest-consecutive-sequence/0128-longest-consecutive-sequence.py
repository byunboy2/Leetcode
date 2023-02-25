class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        maxCount = 1
        currentCount = 1
        uniqueNums = set(nums)
        sortedNums = sorted(uniqueNums)
        for i in range(1, len(sortedNums)):
            if sortedNums[i] == sortedNums[i-1] + 1:
                currentCount += 1
            else:
                maxCount = max(currentCount, maxCount)
                currentCount = 1
        return max(currentCount, maxCount)
