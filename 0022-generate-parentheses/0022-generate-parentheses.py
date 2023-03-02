class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        if not n: return []
        all_combinations = []
        def backtrack(current_combination,open_count, close_count):
            if len(current_combination) == 2*n:
                all_combinations.append(current_combination)
            if open_count < n:
                backtrack(current_combination+"(",open_count+1,close_count)
            if open_count > close_count:
                backtrack(current_combination+")",open_count,close_count+1)
        backtrack("",0,0)
        return all_combinations