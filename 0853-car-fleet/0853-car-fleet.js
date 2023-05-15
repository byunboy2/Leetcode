/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const pair = [];
    for (let i = 0; i < position.length; i++) {
      pair.push({ position: position[i], speed: speed[i] });
    }
    pair.sort((a, b) => b.position - a.position);
    const stack = [];
    for (let i = 0; i < pair.length; i++) {
      const { position: p, speed: s } = pair[i];
      stack.push((target - p) / s);
      if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
        stack.pop();
      }
    }
    return stack.length;
  }