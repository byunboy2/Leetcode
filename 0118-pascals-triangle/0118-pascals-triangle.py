class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        
        pascals_triangle = [[1]]
        
        for i in range(1, numRows):
            current_row = [1]
            for j in range(1, i):
                current_row.append(pascals_triangle[i-1][j] + pascals_triangle[i-1][j-1])
            current_row.append(1)
            pascals_triangle.append(current_row)
            
        return pascals_triangle
