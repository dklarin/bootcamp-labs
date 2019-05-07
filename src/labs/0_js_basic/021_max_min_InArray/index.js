const task = `
        Write a program that will output the max and min number from input array
`;

/**the test case inputs */
var testCases = [[12, 5, -1, 14, 32, 7]];

function solution(input, output) {

        input.sort(compareNumbers)
        
        output.write("This is min number: " + input[0])
        output.write("This is max number: " + input[input.length - 1])

}

function compareNumbers(a, b) {
        return a - b;
}

export default { id: "021_max_min_InArray", task, solution, testCases };
