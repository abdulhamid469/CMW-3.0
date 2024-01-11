async function waitAndGreet(name: string): Promise<void> {
    try {
      console.log(`Waiting for 2 seconds...`);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(`Hello, ${name}!`);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  async function main() {
    await waitAndGreet("Hamid");
    console.log("Greeting complete!");
  }
  
  main();