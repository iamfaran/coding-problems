function uniqueInOrder(str) {
  debugger;
  let arr = str.split("");

  // + 1 and at the end last item gets pushed
  // because it is not equal to the undefined

  // -1 if we want to push the first instance
  return arr.filter((item, index) => {
    return item !== arr[index + 1];
  });
}

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ["A", "B", "C", "D", "A", "B"]
