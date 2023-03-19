function countSubstrings(s) {
    const n = s.length;
    const dp = new Array(n).fill(0);
    let count = 0;
    
    for(let i=n-1; i>=0; i--){
        for(let j=n-1; j>=i; j--){
            if(s[i] === s[j]){
                if(j-i < 2){
                    dp[j] = 1;
                }
                else{
                    dp[j] = dp[j-1];
                }
                count += dp[j];
            }
            else{
                dp[j] = 0;
            }
        }
    }
    return count;
}


