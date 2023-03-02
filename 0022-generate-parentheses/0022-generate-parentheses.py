class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        if n == 0:
            return []
        result = []
        def backtrack(combination, open_count, close_count):
            if len(combination) == n * 2:
                result.append(combination)
                return
            if open_count < n:
                backtrack(combination + '(', open_count + 1, close_count)
            if close_count < open_count:
                backtrack(combination + ')', open_count, close_count + 1)
        backtrack('', 0, 0)
        return result
