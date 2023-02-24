class Solution:
    def longestWord(self, words: List[str]) -> str:
        words.sort()
        longest_word = ""
        built_word = set()
        for word in words:
            if len(word)==1 or (word[:-1] in built_word):
                built_word.add(word)
                if len(word) > len(longest_word):
                    longest_word = word 
        return longest_word