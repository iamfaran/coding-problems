// () => true
// ( => false
// ) => false
// (()) => true
// (() => false
// (())() => true
// (()()) => true
// (()() => false
//(())((()())()) =>  true

function checkParenthesis(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") count++;
    if (str[i] === ")") count--;
    if (count < 0) return false;
  }
  return count === 0;
}
