/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let totalPalindromes = 0;
    
    var countPalindromes = function(left,right){
        let total=0;
        while(left>=0 && right<s.length && s[left]===s[right]){
            left--;
            right++;
            total++;
        }
        return total;
    }
    for(let i = 0 ; i<s.length;i++){
        totalPalindromes+=countPalindromes(i,i);
        totalPalindromes+=countPalindromes(i,i+1);
    };

    return totalPalindromes;
};