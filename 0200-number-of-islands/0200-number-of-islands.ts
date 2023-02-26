function numIslands(grid: string[][]): number {
  const numRows = grid.length;
  const numCols = grid[0].length;
  let numIslands = 0;

  function dfs(row: number, col: number) {
    if (row < 0 || col < 0 || row >= numRows || col >= numCols || grid[row][col] === '0') {
      return;
    }

    grid[row][col] = '0';

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] === '1') {
        numIslands++;
        dfs(i, j);
      }
    }
  }

  return numIslands;
}
