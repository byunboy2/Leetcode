class Solution:
    def uniquePaths(self, num_rows: int, num_cols: int) -> int:
        last_row = [1] * num_cols

        for i in range(num_rows - 1):
            curr_row = [1] * num_cols
            for j in range(num_cols - 2, -1, -1):
                curr_row[j] = curr_row[j + 1] + last_row[j]
            last_row = curr_row
        return last_row[0]