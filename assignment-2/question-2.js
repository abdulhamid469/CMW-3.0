// Define an array of quiz questions
const quizQuestions = [
    "What is the capital of France?",
    "Who wrote 'Romeo and Juliet'?",
    "What is the largest mammal in the world?",
    // Add more quiz questions as needed
];
// Function to fetch a random quiz question
function fetchQuestion() {
    return new Promise((resolve) => {
        // Simulate fetching a random question (you can replace this with actual API call)
        const randomIndex = Math.floor(Math.random() * quizQuestions.length);
        const randomQuestion = quizQuestions[randomIndex];
        // Simulate some delay in fetching the question (you can remove this in a real-world scenario)
        setTimeout(() => {
            resolve(randomQuestion);
        }, 1000); // 1000 milliseconds (1 second) delay for simulation
    });
}
// Example usage of the fetchQuestion function
fetchQuestion().then((question) => {
    console.log("Quiz Question:", question);
    // Display the question in your app UI
});
export {};
