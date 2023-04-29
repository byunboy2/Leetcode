/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for(let i = 0; i<tokens.length; i++){
        let current = tokens[i];
        if(current === "+"){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b+a);
           } else if(current === "-"){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b-a);
           } else if(current === "*"){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b*a);
           } else if(current === "/"){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(parseInt(b/a));
           } else {
               stack.push(Number(current));
           }
    }
    return stack[0]
};