/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];

  if (s.length === 1) {
    return false;
  }

  for (char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      var topOfStack = stack[stack.length - 1];

      if (!topOfStack) return false;

      if (topOfStack === "(" && char === ")") {
        stack.pop();
      } else if (topOfStack === "{" && char === "}") {
        stack.pop();
      } else if (topOfStack === "[" && char === "]") {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  }
  return false;
};

console.log(isValid("(])")); // true
