const task = `
Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzzss"

This Lab Exercise has no input
`;

function solution(input, output) {

    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            output.write("FizzBuzzss")
        else if (i % 3 == 0)
            output.write("Fizz")
        else if (i % 5 == 0)
            output.write("Buzz")
        else
            output.write(i)
    }
}

export default { id: "010_fizzBuzz", task, solution };
