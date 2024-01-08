/**
 ***Question 1: Callbacks***
**Task:**
    You are creating a basic calculator application. Write a TypeScript function named **`calculate`** that
    takes two numbers and an operation (add, subtract, multiply, or divide) as parameters. Implement a
    callback function to handle the calculation and display the result.
 */
function calculate(num1, num2, operation, callback) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            }
            else {
                console.error('Cannot divide by zero.');
                return;
            }
            break;
        default:
            console.error('Invalid operation.');
            return;
    }
    // Invoke the callback function with the calculated result
    callback(result);
}
// Example usage:
const num1 = 10;
const num2 = 5;
const operation = 'add';
// Define a callback function to display the result
function displayResult(result) {
    console.log(`Result: ${result}`);
}
// Call the calculate function with the numbers, operation, and callback
calculate(num1, num2, operation, displayResult);
export {};
