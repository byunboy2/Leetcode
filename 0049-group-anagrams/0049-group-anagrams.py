class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)
        for str in strs:
            group = "".join(sorted(str))
            groups[group].append(str)
        return list(groups.values())