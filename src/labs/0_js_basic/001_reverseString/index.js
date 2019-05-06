const task = `
        Write a program that will output the input string with the characters in reverse order
`;

/**the test case inputs */
var testCases = ["jurica smircic"];

function solution(input, output) {
        
        var splitString = input.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
                
        output.write(joinArray)

}

export default { id: "001_revrse_string", task, solution, testCases };
