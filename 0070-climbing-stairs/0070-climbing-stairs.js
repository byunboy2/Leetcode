var climbStairs = function(n) {
    if (n == 1) {
        return 1;
    }
    let [firstPattern, secondPattern, totalCombinations] = [1, 1, 0];
    for (let index = n - 2; index >= 0; index--) {
        totalCombinations = firstPattern + secondPattern;
        firstPattern = secondPattern;
        secondPattern = totalCombinations;
    }
    return totalCombinations;
};
