const task = `
Write a program that will output a sum of digits of a input number
`;

/**the test case inputs */
var testCases = [12345, 123345];

function solution(input, output) {

    var sln = input.toString();
    var sum = 0;

    for (let i = 0; i < sln.length; i++) {
        sum = sum + parseInt(sln[i]);
    }
    output.write(sum)

}

export default {
    id: "010_sumOfDigits",
    task,
    solution,
    testCases
};