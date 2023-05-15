/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let stack = [];
    let result =[];
    function generatePossibleCombos(left,right){
        if(left===n && right===n){
            result.push(stack.join(""));
            return;
        }
        if(left<n){
            stack.push("(");
            generatePossibleCombos(left+1,right);
            stack.pop();
        }
        if(left>right){
            stack.push(")");
            generatePossibleCombos(left,right+1);
            stack.pop();
        }
    };
    generatePossibleCombos(0,0);
    return result
};