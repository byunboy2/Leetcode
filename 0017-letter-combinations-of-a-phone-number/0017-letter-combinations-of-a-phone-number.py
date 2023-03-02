class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        
        digit_to_letters = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
        all_combinations = []
        
        def generate_combinations(digits_left, current_combination):
            if not digits_left:
                all_combinations.append(current_combination)
                return
            
            for letter in digit_to_letters[int(digits_left[0])]:
                generate_combinations(digits_left[1:], current_combination + letter)
        
        generate_combinations(digits, "")
        return all_combinations