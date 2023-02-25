from collections import defaultdict
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequency_counter = defaultdict(int)
        for num in nums:
            frequency_counter[num] += 1
        reverse_sorted = sorted(frequency_counter.items(), key= lambda x:x[1], reverse=True)
        return [counter[0] for counter in reverse_sorted[:k]]
