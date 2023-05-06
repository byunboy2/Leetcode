/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const key = {
        "(":")",
        "[":"]",
        "{":"}"
    };
    for(let i = 0; i<s.length;i++){
        let current = s[i];
        if(current === "{" || current==="[" || current==="("){
            stack.push(current);
        } else if(key[stack.pop()]!==current){
                  return false;
                  }
        
    }
    return stack.length ? false : true;
};