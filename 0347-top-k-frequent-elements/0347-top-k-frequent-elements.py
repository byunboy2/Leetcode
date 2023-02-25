from collections import defaultdict

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequency_counter = defaultdict(int)
        output = []
        for num in nums:
            frequency_counter[num] += 1
        sorted_items = sorted(frequency_counter.items(), key=lambda x: x[1], reverse=True)
        for item in sorted_items[:k]:
            output.append(item[0])
        return output
