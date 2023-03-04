class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        pascals_triangle = list()
        current_row = 1 
        
        while current_row <= numRows :
            current_row_list = list()
            
            for i in range(0,current_row):
                
                if i == 0 or i == current_row - 1:
                    current_row_list.append(1)
                else:
                     if len(pascals_triangle) > 1 and i < len(pascals_triangle[current_row-2]):
                        current_row_list.append(pascals_triangle[current_row-2][i]+pascals_triangle[current_row-2][i-1])
            
            current_row+=1    
            
            pascals_triangle.append(current_row_list)
            
        return pascals_triangle
    