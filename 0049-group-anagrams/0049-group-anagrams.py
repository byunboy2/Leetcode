class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        group_counter = defaultdict(list)
        for s in strs:
            group = ''.join(sorted(s))
            group_counter[group].append(s)
        return list(group_counter.values())