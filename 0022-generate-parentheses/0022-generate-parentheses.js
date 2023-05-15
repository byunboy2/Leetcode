var generateParenthesis = function(n) {
  let result = [];
  let stack = [];

  let generatePossibleCombinations = function(start, end) {
    if (start === n && end === n) {
      result.push(stack.join(''));
      return;
    }

    if (start < n) {
      stack.push('(');
      generatePossibleCombinations(start + 1, end);
      stack.pop();
    }

    if (end < start) {
      stack.push(')');
      generatePossibleCombinations(start, end + 1);
      stack.pop();
    }
  };

  generatePossibleCombinations(0, 0);
  return result;
};

