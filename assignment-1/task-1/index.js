/**
 * Task Description:**
 *   1. **Scenario:**
 *   You are tasked to simulate a simple shopping experience using conditional statements and loops at a supermarket.
 *    2. **Requirements:**
 *       - Create a TypeScript program that simulates a shopping scenario with multiple conditions.
 *       - Utilize if-else, if-else if-else statements for decision making based on different scenarios encountered while shopping.
 *       - Incorporate nested loops to simulate actions within various sections of the supermarket.
 *   3. **Functionalities to Include:**
 *       - **Scenario 1 - Buying Groceries:**
 *           - Simulate buying fruits, vegetables, and groceries.
 *           - Apply if-else statements to check specific conditions:
 *               - Check if the customer wants fruits or vegetables.
 *               - Based on the choice, suggest different items available and their prices.
 *               - Display the total bill.
 *       - **Scenario 2 - Checking Discounts:**
 *           - Introduce a discount scenario based on the total bill amount.
 *           - Use if-else if-else statements to apply discounts:
 *               - If the bill amount is above a certain value, apply a discount.
 *               - Display the discounted total.
 *       - **Scenario 3 - Checkout Process:**
 *          - Simulate the checkout process.
 *           - Use nested loops to ask for payment methods:
 *               - First, ask the user for the preferred payment method (nested loop for payment options).
 *              - Display a confirmation message based on the payment method chosen.
 */
// Define a function electronic shopping scenario
function electronicShopping() {
    // Scenario 1 - Buying Electronic Devices
    console.log("Welcome to the electronics store!");
    let totalBill = 0;
    console.log("Electronic devices section:");
    console.log("1. Laptop - $1000");
    console.log("2. Smartphone - $500");
    // Add more electronic device options and prices as needed
    let selectedDevice = 1; // Assume the customer selects a laptop
    if (selectedDevice === 1) {
        totalBill += 1000;
    }
    else if (selectedDevice === 2) {
        totalBill += 500;
    }
    // Add more conditions for other electronic devices
    // Scenario 2 - Checking Discounts
    if (totalBill > 800) {
        console.log("Great choice! You qualify for a $50 discount.");
        totalBill -= 50; // Apply a $50 discount
        console.log(`Discounted total: $${totalBill.toFixed(2)}`);
    }
    else {
        console.log("No discount applied. Keep exploring for more deals!");
    }
    // Scenario 3 - Checkout Process
    console.log("Checkout process:");
    // Simulate the payment method selection using nested loops
    let validPaymentMethod = false;
    while (!validPaymentMethod) {
        console.log("Choose a payment method:");
        console.log("1. Debit card");
        console.log("2. PayPal");
        // Add more payment options as needed
        let selectedPaymentMethod = 1; // Assume the customer selects a debit card
        switch (selectedPaymentMethod) {
            case 1:
                console.log("You've chosen to pay with a debit card. Thank you!");
                validPaymentMethod = true;
                break;
            case 2:
                console.log("You've chosen to pay with PayPal. Complete the transaction on the website. Thank you!");
                validPaymentMethod = true;
                break;
            default:
                console.log("Invalid payment method. Please choose a valid option.");
        }
    }
    console.log("Thank you for shopping with us!");
}
// Call the function the electronic shopping scenario
electronicShopping();
export {};
