/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = Array(temperatures.length).fill(0);
    let stack = [];
    for(let i = 0; i<temperatures.length;i++){
        while(stack.length>0 && temperatures[i] > temperatures[stack[stack.length-1]]){
            let previousIndex = stack.pop();
            let difference = i-previousIndex;
            result[previousIndex]= difference;
            
        }
        stack.push(i);
    };
    return result;
};