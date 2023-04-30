var generateParenthesis = function(n) {
    let stack = [];
    let res = [];

    function backtrack(openN, closedN) {
    
        if (openN < n) {
            stack.push('(');
            backtrack(openN + 1, closedN);
            stack.pop();
        }

        if (closedN < openN) {
            stack.push(')');
            backtrack(openN, closedN + 1);
            stack.pop();
        }
          if (openN === closedN && openN === n) {
            res.push(stack.join(''));
            return;
        }

    }

    backtrack(0, 0);
    return res;
};