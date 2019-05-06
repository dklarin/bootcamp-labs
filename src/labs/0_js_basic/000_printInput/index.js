var task = `
Write a function that returns the input argument unchanged.
Not a trick question, this is just a warmup, just return what you receive in the input argument
`;

/**the test case inputs */
var testCases = ["Hello", "World", "From zadar bootcamp"];

/**The solution! */
function solution(input, output) {

  output.write(input)
  
}

export default {
  id: "000_printInput",
  task,
  solution,
  testCases
};
