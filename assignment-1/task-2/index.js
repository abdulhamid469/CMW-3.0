/**
 * Task 2
 * - **Scenario 1: Sum numbers
 * - Write a function named **add** that takes two numbers as arguments and returns their sum.
 */
var add = function (a, b) {
    return a + b;
};
console.log(add(5, 6));
/**
 * - **Scenario 2: Check Even or Odd**
    - Develop a function **`checkEvenOrOdd`** that checks if a given number is even or odd.
    - The function should take an integer as a parameter and return a string indicating whether the number is even or odd.
 */
var checkEvenOrOdd = function (a, b) {
    if (a % b === 0) {
        return "Even Number";
    }
    else if (a % b === 1) {
        return "Odd Number";
    }
    else {
        return "Wrong Input";
    }
};
console.log(checkEvenOrOdd(8, 0));
/**
 * - **Scenario 3: Calculate Area:**
    - Create a function **`calculateArea`** that calculates the area of a rectangle.
    - The function should take width and height as parameters and return the calculated area.
 */
var calculateArea = function (w, h) {
    var area = w * h;
    return area;
};
console.log(calculateArea(5, 8));
/**
 * - **Scenario 4: String Reversal**
    - Implement a function **`reverseString`** that reverses a given string.
    - The function should take a string as a parameter and return the reversed string.
 */
var reverseString = function (str) {
    return str.split("").reverse().join("");
};
console.log(reverseString("Testing"));
/**
 * - **Scenario 5: Temperature Conversion:**
    - Create a function **`convertCelsiusToFahrenheit`** that converts temperature from Celsius to Fahrenheit.
    - The function should take a temperature value in Celsius as a parameter and return the equivalent temperature in Fahrenheit.
 */
var convertCelsiusToFahrenheit = function (c) {
    var fahrenheit = (c * 5 / 9) + 32;
    return fahrenheit;
};
console.log(convertCelsiusToFahrenheit(100));
