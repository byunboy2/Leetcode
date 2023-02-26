class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        #iterate through each row and remove all change all surrounding to 0. Only direct ones
        width = len(grid[0])
        height = len(grid)
        island_count = 0
        def dfs(x:int, y:int)-> None:
            # helper function to change direct surroundings to zero 
            if x < 0 or y < 0 or x >= height or y>= width or grid[x][y] == "0":
                return
            
            grid[x][y] = "0"
            dfs(x-1,y)
            dfs(x+1,y)
            dfs(x,y-1)
            dfs(x,y+1)
        
        for i in range(0,height):
            for j in range(0,width):
                if grid[i][j] == "1":
                    dfs(i,j)
                    island_count+=1
        
        return island_count    