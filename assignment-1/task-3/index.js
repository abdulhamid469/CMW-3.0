/**
 * - **Scenario 1 - Modify Array with Methods:**
    - Initialize an array with some initial elements.
    - Demonstrate the usage of the following array methods:
        - **`push`**: Add new elements to the end of the array.
        - **`pop`**: Remove the last element from the array.
        - **`shift`**: Remove the first element from the array.
        - **`unshift`**: Add new elements to the beginning of the array.
 */
var listFruits = ["Apple", "Banana", "Mango"];
// Add last element in Fruits list
listFruits.push("Orange");
console.log(listFruits);
// Remove last element form Fruits list
listFruits.pop();
console.log(listFruits);
// Remove first element from Fruits list
listFruits.shift();
console.log(listFruits);
// Add new element in the beginnig of Fruits list
listFruits.unshift("Apricot");
console.log(listFruits);
/**
 * - **Scenario 2 - Subarray Creation:**
    - Implement the use of **`splice`** and **`slice`** to create subarrays from the original array:
        - **`splice`**: Create a subarray by removing elements from the original array.
        - **`slice`**: Create a subarray without modifying the original array.
 */
var animals = ["Cat", "Loins", "House", "Dog"];
animals.splice(1, 0, "Rabbit");
console.log(animals);
var countries = ["Pakistan", "Afghanistan", "Iran", "Turky"];
var ourSideCountry = countries.slice(3, 4);
console.log(ourSideCountry);
