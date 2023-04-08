public class Solution {
    public int CountSquares(int[][] matrix) {
        int width = matrix[0].Length;
        int height = matrix.Length;
        int[,] dp = new int[height, width];

        int count = 0;
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                if (matrix[i][j] == 1) {
                    if (i == 0 || j == 0) {
                        dp[i, j] = 1;
                    } else {
                        dp[i, j] = Math.Min(dp[i-1, j], Math.Min(dp[i, j-1], dp[i-1, j-1])) + 1;
                    }
                    count += dp[i, j];
                }
            }
        }

        return count;
    }
}
