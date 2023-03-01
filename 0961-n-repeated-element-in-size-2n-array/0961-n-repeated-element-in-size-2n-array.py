class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        n_repeat = len(nums) // 2
        frequency_counter = {}
        for num in nums:
            frequency_counter[num] = frequency_counter.get(num, 0) + 1
        for num, count in frequency_counter.items():
            if count == n_repeat:
                return num
